package life.kylestauffer.snews.service.image;

import org.springframework.core.io.Resource;

import java.io.FileNotFoundException;

public interface ImageService {

    Resource getFile(String size, Long id, String fileType) throws FileNotFoundException;
}
