package life.kylestauffer.snews.helpers;

import life.kylestauffer.snews.model.FileSize;

import java.io.File;

public class ImageUtils {

    public static final String SUFFIX = "/images/";

    public static final String PATH = "." + SUFFIX;

    public static void createDirectories() {
        File directory = new File(PATH);
        if (!directory.exists() && !directory.mkdir()) {
            throw new RuntimeException("Failed to create image directories");
        }

        File small = new File("./images/" + FileSize.SMALL.getSize());
        File medium = new File("./images/" + FileSize.MEDIUM.getSize());
        File large = new File("./images/" + FileSize.LARGE.getSize());
        File original = new File("./images/" + FileSize.ORIGINAL.getSize());

        if ((!small.exists() && !small.mkdir())
                || (!medium.exists() && !medium.mkdir())
                || (!large.exists() && !large.mkdir())
                || (!original.exists() && !original.mkdir())) {
            throw new RuntimeException("Failed to create image directories");
        }
    }

    public static File getFile(FileSize size, String imageId, String fileType) {
        return new File(getPath(size, imageId, fileType));
    }

    public static String getPath(FileSize size, String imageId, String fileType) {
        return PATH + size.getSize() + "/" + imageId + "." + fileType;
    }

    public static String getUrl(FileSize size, String imageId, String fileType) {
        return "http://localhost:3003" + SUFFIX + size.getSize() + "/" + imageId + "." + fileType;
    }
}
