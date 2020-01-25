package life.kylestauffer.snews.dao;

import life.kylestauffer.snews.model.PostModel;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Nonnull;
import java.util.List;
import java.util.Optional;

@Repository
public interface PostDatabase extends CrudRepository<PostModel, Long> {

    @Override
    @Nonnull
    Optional<PostModel> findById(@Nonnull Long id);

    @Nonnull
    @Override
    <S extends PostModel> List<S> saveAll(@Nonnull Iterable<S> entities);

    @Nonnull
    @Override
    <S extends PostModel> S save(@Nonnull S entity);

    List<PostModel> findByTags_TagAndIsPublishedOrderByDateDesc(String tag, boolean isPublished, Pageable pageable);

    List<PostModel> findByIsPublishedOrderByDateDesc(boolean isPublished, Pageable pageable);

    List<PostModel> findTop25ByIsPublishedOrderByViewsDesc(boolean isPublished);

    List<PostModel> findTop25ByIsPublishedAndAuthor_IdOrderByDateDesc(boolean isPublished, Long authorId);

    List<PostModel> findTop25ByIsPublishedOrderByDateDesc(boolean isPublished);

    @Query("update PostModel p set p.views = p.views + 1 where p.id = :id")
    @Modifying
    @Transactional
    void updateCount(@Param("id") Long id);
}
