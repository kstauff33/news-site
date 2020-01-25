package life.kylestauffer.snews.helpers;

import com.google.protobuf.ByteString;
import life.kylestauffer.snews.model.FileSize;
import life.kylestauffer.snews.model.Image;
import lombok.extern.slf4j.Slf4j;
import net.coobird.thumbnailator.Thumbnails;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Slf4j
public final class ImageHandler {

    private final Long imageId;
    private final String fileType;
    private final ByteString imageData;


    public ImageHandler(Long imageId, String fileType, ByteString imageData) {
        this.imageId = imageId;
        this.fileType = fileType;
        this.imageData = imageData;
    }

    public ImageHandler writeFiles() {
        File file = new File(getPath(FileSize.ORIGINAL));
        try {
            if (file.exists() || file.createNewFile()) {
                FileOutputStream fileOutputStream = new FileOutputStream(file);
                imageData.writeTo(fileOutputStream);
                fileOutputStream.close();

                Thumbnails.of(file)
                        .size(100, 100)
                        .toFile(getPath(FileSize.SMALL));

                Thumbnails.of(file)
                        .size(400, 175)
                        .toFile(getPath(FileSize.MEDIUM));

                Thumbnails.of(file)
                        .size(930, 350)
                        .toFile(getPath(FileSize.LARGE));

            } else {
                log.error("Failed to create file");
            }
        } catch (IOException e) {
            log.error("Failed to construct file writer", e);
        }
        return this;
    }

    public void setFileUrls(Image image) {
        image.setSmallUrl(getUrl(FileSize.SMALL));
        image.setMediumUrl(getUrl(FileSize.MEDIUM));
        image.setLargeUrl(getUrl(FileSize.LARGE));
    }

    private String getPath(FileSize fileSize) {
        return ImageUtils.getPath(fileSize, imageId.toString(), fileType);
    }

    private String getUrl(FileSize fileSize) {
        return ImageUtils.getUrl(fileSize, imageId.toString(), fileType);
    }

}

