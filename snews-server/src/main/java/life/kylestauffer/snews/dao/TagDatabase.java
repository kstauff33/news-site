package life.kylestauffer.snews.dao;

import life.kylestauffer.snews.model.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Nonnull;
import java.util.List;
import java.util.Optional;

@Repository
public interface TagDatabase extends CrudRepository<Tag, Long> {

    @Nonnull
    @Override
    List<Tag> findAll();

    @Nonnull
    Optional<Tag> findByTag(@Nonnull String tag);

    @Override
    <S extends Tag> List<S> saveAll(Iterable<S> entities);

}
