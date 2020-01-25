package life.kylestauffer.snews.dao;

import life.kylestauffer.snews.model.Author;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.annotation.Nonnull;
import java.util.List;
import java.util.Optional;

@Repository
public interface AuthorDatabase extends CrudRepository<Author, Long> {
    @Nonnull
    @Override
    Optional<Author> findById(@Nonnull Long id);

    @Nonnull
    List<Author> findTop25ByOrderById(Pageable pageable);

    @Nonnull
    List<Author> findAll();

}
