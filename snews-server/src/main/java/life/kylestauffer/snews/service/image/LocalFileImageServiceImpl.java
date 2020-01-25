package life.kylestauffer.snews.service.image;

import life.kylestauffer.snews.helpers.ImageUtils;
import life.kylestauffer.snews.model.FileSize;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;

@Slf4j
@Service
public class LocalFileImageServiceImpl implements ImageService {
    @Override
    public Resource getFile(String size, Long id, String fileType) throws FileNotFoundException {
        log.info(ImageUtils.getPath(FileSize.valueOf(size.toUpperCase()), id.toString(), fileType));
        File file = ImageUtils.getFile(FileSize.valueOf(size.toUpperCase()), id.toString(), fileType);
        if (!file.exists()) {
            throw new FileNotFoundException("The requested image does not exist on the filesystem");
        }

        return new FileSystemResource(file);
    }
}
