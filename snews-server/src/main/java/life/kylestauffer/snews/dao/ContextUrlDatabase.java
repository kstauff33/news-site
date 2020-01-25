package life.kylestauffer.snews.dao;

import life.kylestauffer.snews.model.ContextUrl;
import org.springframework.data.repository.CrudRepository;

public interface ContextUrlDatabase extends CrudRepository<ContextUrl, Long> {
}
