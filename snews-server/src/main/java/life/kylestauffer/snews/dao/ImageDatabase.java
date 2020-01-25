package life.kylestauffer.snews.dao;

import life.kylestauffer.snews.model.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageDatabase extends CrudRepository<Image, Long> {
}
