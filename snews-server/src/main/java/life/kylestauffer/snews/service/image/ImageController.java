package life.kylestauffer.snews.service.image;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.FileNotFoundException;

@Slf4j
@Controller
public class ImageController {

    private final ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping(value = "/images/{size}/{id}.{fileType}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<Resource> getImage(@PathVariable String size, @PathVariable Long id, @PathVariable String fileType) {
        log.info("Get file");
        try {
            Resource file = imageService.getFile(size, id, fileType);
            return new ResponseEntity<>(file, HttpStatus.OK);
        } catch (FileNotFoundException e) {
            throw new Exception404();
        }
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    private static final class Exception404 extends RuntimeException {
    }
}
