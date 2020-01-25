package life.kylestauffer.snews.model;

public enum FileSize {

    SMALL("small"), MEDIUM("medium"), LARGE("large"), ORIGINAL("original");

    private final String size;

    FileSize(String size) {
        this.size = size;
    }

    public String getSize() {
        return size;
    }
}
