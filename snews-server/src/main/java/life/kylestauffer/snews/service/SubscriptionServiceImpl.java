package life.kylestauffer.snews.service;

import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.dao.SubscriptionDatabase;
import life.kylestauffer.snews.generated.Base;
import life.kylestauffer.snews.generated.SubscriptionServiceGrpc;
import life.kylestauffer.snews.model.Subscription;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class SubscriptionServiceImpl extends SubscriptionServiceGrpc.SubscriptionServiceImplBase {

    private final SubscriptionDatabase database;

    @Autowired
    public SubscriptionServiceImpl(SubscriptionDatabase database) {
        this.database = database;
    }

    @Override
    public void getSubscription(Base.GetSubscriptionRequest request, StreamObserver<Base.SubscriptionResponse> responseObserver) {
        Optional<Subscription> byId = database.findById(Long.parseLong(request.getId()));
        byId.ifPresent(subscription -> responseObserver.onNext(Base.SubscriptionResponse.newBuilder()
                .setSubscription(subscription.toProto())
                .build()));
        byId.orElseThrow(RuntimeException::new);
        responseObserver.onCompleted();
    }

    @Override
    public void subscribe(Base.SubscriptionRequest request, StreamObserver<Base.SubscriptionResponse> responseObserver) {
        Subscription save = database.save(Subscription.fromProto(request.getSubscription()));
        responseObserver.onNext(Base.SubscriptionResponse.newBuilder()
                .setSubscription(save.toProto())
                .build());
        responseObserver.onCompleted();
    }
}
