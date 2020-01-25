package life.kylestauffer.snews.service;

import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.dao.AuthorDatabase;
import life.kylestauffer.snews.generated.AuthorServiceGrpc;
import life.kylestauffer.snews.generated.Base;
import life.kylestauffer.snews.model.Author;
import life.kylestauffer.snews.model.PostModel;
import lombok.extern.slf4j.Slf4j;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;

import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@GRpcService
public class AuthorServiceImpl extends AuthorServiceGrpc.AuthorServiceImplBase {

    private final AuthorDatabase authorDatabase;

    @Autowired
    public AuthorServiceImpl(AuthorDatabase authorDatabase) {
        this.authorDatabase = authorDatabase;
    }

    @Override
    public void getAuthors(Base.GetAuthorsRequest request, StreamObserver<Base.GetAuthorsResponse> responseObserver) {
        log.info("getAuthors");
        responseObserver.onNext(Base.GetAuthorsResponse.newBuilder()
                .addAllAuthors(authorDatabase.findTop25ByOrderById(PageRequest.of(request.getPage(), 26))
                        .stream()
                        .map(Author::toProto)
                        .collect(Collectors.toList()))
                .build());
        responseObserver.onCompleted();
    }

    @Override
    public void getAuthor(Base.GetAuthorRequest request, StreamObserver<Base.GetAuthorResponse> responseObserver) {
        log.info("getAuthors");
        Optional<Author> optionalAuthor = authorDatabase.findById(Long.parseLong(request.getId()));
        if (optionalAuthor.isPresent()) {
            Author author = optionalAuthor.get();
            responseObserver.onNext(Base.GetAuthorResponse.newBuilder()
                    .setAuthor(author.toProto())
                    .addAllPosts(author.getPosts().stream()
                            .peek(p -> p.setText(p.getText().substring(0, Math.min(p.getText().length(), 300))))
                            .map(PostModel::toProto)
                            .collect(Collectors.toList()))
                    .build());
        }
        responseObserver.onCompleted();
    }
}
