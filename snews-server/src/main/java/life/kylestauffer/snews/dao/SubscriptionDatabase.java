package life.kylestauffer.snews.dao;


import life.kylestauffer.snews.model.Subscription;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Nonnull;
import java.util.Optional;

@Repository
public interface SubscriptionDatabase extends CrudRepository<Subscription, Long> {
    @Nonnull
    @Override
    Optional<Subscription> findById(@Nonnull Long id);

    @Nonnull
    @Override
    Subscription save(@Nonnull Subscription s);
}
