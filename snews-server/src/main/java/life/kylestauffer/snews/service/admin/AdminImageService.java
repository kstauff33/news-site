package life.kylestauffer.snews.service.admin;

import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.auth.AuthInterceptor;
import life.kylestauffer.snews.dao.ImageDatabase;
import life.kylestauffer.snews.generated.Admin;
import life.kylestauffer.snews.generated.ImageServiceGrpc;
import life.kylestauffer.snews.helpers.ImageHandler;
import life.kylestauffer.snews.helpers.ImageUtils;
import life.kylestauffer.snews.model.Image;
import lombok.extern.slf4j.Slf4j;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
@GRpcService(interceptors = {AuthInterceptor.class})
public class AdminImageService extends ImageServiceGrpc.ImageServiceImplBase {
    private final ImageDatabase imageDatabase;

    @Autowired
    public AdminImageService(ImageDatabase imageDatabase) {
        this.imageDatabase = imageDatabase;
        ImageUtils.createDirectories();
    }

    @Override
    public void uploadImage(Admin.UploadImageRequest request, StreamObserver<Admin.UploadImageResponse> responseObserver) {
        Image image = imageDatabase.save(new Image());
        image.setAltText(request.getAltText());
        new ImageHandler(image.getId(), request.getFiletype(), request.getData())
                .writeFiles()
                .setFileUrls(image);
        image = imageDatabase.save(image);

        responseObserver.onNext(Admin.UploadImageResponse.newBuilder()
                .setImage(image.toProto())
                .build());
        responseObserver.onCompleted();
    }

}
