package life.kylestauffer.snews.service.admin;

import io.grpc.Status;
import io.grpc.StatusRuntimeException;
import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.auth.ApplicationUser;
import life.kylestauffer.snews.auth.AuthConstants;
import life.kylestauffer.snews.auth.AuthInterceptor;
import life.kylestauffer.snews.dao.AuthorDatabase;
import life.kylestauffer.snews.dao.PostDatabase;
import life.kylestauffer.snews.generated.Admin;
import life.kylestauffer.snews.generated.AdminPostServiceGrpc;
import life.kylestauffer.snews.generated.Base;
import life.kylestauffer.snews.model.PostModel;
import life.kylestauffer.snews.model.Tag;
import lombok.extern.slf4j.Slf4j;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import javax.annotation.Nonnull;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Slf4j
@GRpcService(interceptors = {AuthInterceptor.class})
public class AdminPostService extends AdminPostServiceGrpc.AdminPostServiceImplBase {

    private final PostDatabase postDatabase;
    private final AuthorDatabase authorDatabase;

    @Autowired
    public AdminPostService(PostDatabase postDatabase, AuthorDatabase authorDatabase) {
        this.postDatabase = postDatabase;
        this.authorDatabase = authorDatabase;
    }

    @Override
    public void savePost(Admin.SavePostRequest request, StreamObserver<Admin.SavePostResponse> responseObserver) {
        log.info("Received post to save");

        PostModel postModel = PostModel.fromProto(request.getPost());
        ApplicationUser currentUser = getCurrentUser();

        switch (currentUser.getRoleAsRole()) {
            default:
            case ANONYMOUS:
            case READER:
                return;
            case AUTHOR:
                Optional<PostModel> byId = postDatabase.findById(postModel.getId());
                if (!byId.isPresent() || !byId.get().getAuthor().getId().equals(currentUser.getAuthor().getId())) {
                    return;
                }
                break;
            case EDITOR:
            case ADMIN:
            case SUPERADMIN:
                break;
        }

        postModel.setPublished(false);
        responseObserver.onNext(Admin.SavePostResponse.newBuilder()
                .setPost(postDatabase.save(postModel).toProto())
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void publishPost(Admin.SavePostRequest request, StreamObserver<Admin.SavePostResponse> responseObserver) {
        log.info("Received post to publish");
        PostModel postModel = PostModel.fromProto(request.getPost());
        postModel.setPublished(true);
        postModel.setDate(Calendar.getInstance());

        validate(postModel);
        responseObserver.onNext(Admin.SavePostResponse.newBuilder()
                .setPost(postDatabase.save(postModel).toProto())
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void getDraftPosts(Admin.GetDraftPostsRequest request, StreamObserver<Admin.GetDraftPostsResponse> responseObserver) {
        ApplicationUser currentUser = getCurrentUser();
        List<PostModel> posts;
        switch (currentUser.getRoleAsRole()) {
            default:
            case ANONYMOUS:
            case READER:
                responseObserver.onError(new StatusRuntimeException(Status.UNAUTHENTICATED));
                return;
            case AUTHOR:
                posts = postDatabase.findTop25ByIsPublishedAndAuthor_IdOrderByDateDesc(false, currentUser.getAuthor().getId());
                break;
            case EDITOR:
            case ADMIN:
            case SUPERADMIN:
                posts = postDatabase.findTop25ByIsPublishedOrderByDateDesc(false);
                break;
        }

        responseObserver.onNext(Admin.GetDraftPostsResponse.newBuilder()
                .addAllPosts(posts
                        .stream()
                        .map(PostModel::toProto)
                        .collect(Collectors.toList()))
                .build());
    }

    private void validate(PostModel post) {
        post.setAuthor(authorDatabase.findAll().get(0));
        if (StringUtils.isEmpty(post.getTitle())
                || StringUtils.isEmpty(post.getTagline())
                || StringUtils.isEmpty(post.getText())
                || CollectionUtils.isEmpty(post.getTags())
                || post.getImage() == null
                || post.getAuthor() == null
                || (post.getTags().stream().map(Tag::getTag).filter(t -> t.equals("listen")).collect(Collectors.toSet()).size() > 0
                && StringUtils.isEmpty(post.getAudioUrl()))) {

            throw new RuntimeException("Failed to validate post");
        }
    }

    @Nonnull
    private ApplicationUser getCurrentUser() {
        ApplicationUser applicationUser = AuthConstants.AUTH_CONTEXT_KEY.get();
        if (applicationUser == null || applicationUser.getAuthor() == null) {
            log.error("Failed to find user or associated author profile");
            throw new StatusRuntimeException(Status.UNAUTHENTICATED);
        }
        return applicationUser;
    }
}
