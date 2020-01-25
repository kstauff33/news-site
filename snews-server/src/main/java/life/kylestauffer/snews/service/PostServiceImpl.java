package life.kylestauffer.snews.service;

import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.dao.PostDatabase;
import life.kylestauffer.snews.generated.Base;
import life.kylestauffer.snews.generated.PostServiceGrpc;
import life.kylestauffer.snews.model.PostModel;
import lombok.extern.slf4j.Slf4j;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@GRpcService
public class PostServiceImpl extends PostServiceGrpc.PostServiceImplBase {

    private final PostDatabase postDatabase;

    @Autowired
    public PostServiceImpl(PostDatabase postDatabase) {
        this.postDatabase = postDatabase;
    }

    @Override
    public void getPosts(Base.GetPostsRequest request,
                         StreamObserver<Base.GetPostsResponse> responseObserver) {
        List<PostModel> posts;
        if ("home".equals(request.getType())) {
            PageRequest page = PageRequest.of(request.getPage(), request.getPage() == 0 ? 9 : 26);
            posts = postDatabase.findByIsPublishedOrderByDateDesc(true, page);
        } else if (!StringUtils.isEmpty(request.getType())) {
            posts = postDatabase.findByTags_TagAndIsPublishedOrderByDateDesc(request.getType(), true, PageRequest.of(request.getPage(), 26));
        } else {
            posts = postDatabase.findByIsPublishedOrderByDateDesc(true, PageRequest.of(request.getPage(), 26));
        }

        responseObserver.onNext(Base.GetPostsResponse
                .newBuilder()
                .addAllPost(posts.stream()
                        .peek(this::trimBody)
                        .map(PostModel::toProto)
                        .collect(Collectors.toList()))
                .build());
        responseObserver.onCompleted();
    }

    @Transactional
    @Override
    public void getPost(Base.GetPostRequest request, StreamObserver<Base.GetPostResponse> responseObserver) {
        long id = Long.parseLong(request.getId());
        Optional<PostModel> post = postDatabase.findById(id);
        if (!post.isPresent()) {
            responseObserver.onError(new Exception("Could not find post"));
            return;
        }
        Base.GetPostResponse response = Base.GetPostResponse.newBuilder().setPost(post.get().toProto()).build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
        postDatabase.updateCount(id);
    }

    @Override
    public void getTopPosts(Base.GetTopPostsRequest request,
                            StreamObserver<Base.GetTopPostsResponse> responseObserver) {
        responseObserver.onNext(Base.GetTopPostsResponse
                .newBuilder()
                .addAllPost(postDatabase
                        .findTop25ByIsPublishedOrderByViewsDesc(true)
                        .stream()
                        .peek(this::trimBody)
                        .map(PostModel::toProto)
                        .collect(Collectors.toList()))
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void getRecentPosts(Base.GetRecentPostsRequest request,
                               StreamObserver<Base.GetRecentPostsResponse> responseObserver) {
        responseObserver.onNext(Base.GetRecentPostsResponse
                .newBuilder()
                .addAllPost(postDatabase
                        .findTop25ByIsPublishedOrderByDateDesc(true)
                        .stream()
                        .peek(this::trimBody)
                        .map(PostModel::toProto)
                        .collect(Collectors.toList()))
                .build());
        responseObserver.onCompleted();
    }

    private void trimBody(PostModel post) {
        if (!StringUtils.isEmpty(post.getText()) && post.getText().length() > 300) {
            post.setText(post.getText().substring(0, 300));
        }
    }
}
