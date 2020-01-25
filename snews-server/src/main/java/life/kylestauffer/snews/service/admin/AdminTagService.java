package life.kylestauffer.snews.service.admin;

import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.auth.AuthInterceptor;
import life.kylestauffer.snews.dao.TagDatabase;
import life.kylestauffer.snews.generated.Admin;
import life.kylestauffer.snews.generated.TagServiceGrpc;
import life.kylestauffer.snews.model.Tag;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.stream.Collectors;

@GRpcService(interceptors = {AuthInterceptor.class})
public class AdminTagService extends TagServiceGrpc.TagServiceImplBase {
    private final TagDatabase tagDatabase;

    @Autowired
    public AdminTagService(TagDatabase tagDatabase) {
        this.tagDatabase = tagDatabase;
    }

    @Override
    public void getTags(Admin.GetTagsRequest request, StreamObserver<Admin.GetTagsResponse> responseObserver) {
        responseObserver.onNext(Admin.GetTagsResponse.newBuilder()
                .addAllTags(tagDatabase.findAll().stream().map(Tag::toProto).collect(Collectors.toList()))
                .build());
        responseObserver.onCompleted();
    }
}
