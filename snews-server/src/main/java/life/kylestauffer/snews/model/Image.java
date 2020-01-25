package life.kylestauffer.snews.model;

import life.kylestauffer.snews.generated.Base;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;
import org.springframework.util.StringUtils;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "images")
public class Image extends AuditModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    @Column
    private String smallUrl;

    @NonNull
    @Column
    private String mediumUrl;

    @NonNull
    @Column
    private String largeUrl;

    @NonNull
    @Column
    private String altText;

    public static Image fromProto(Base.Image image) {
        return Image.builder()
                .id(StringUtils.isEmpty(image.getId()) ? null : Long.parseLong(image.getId()))
                .smallUrl(image.getSmallUrl())
                .mediumUrl(image.getMediumUrl())
                .largeUrl(image.getLargeUrl())
                .altText(image.getAltText())
                .build();
    }

    public Base.Image toProto() {
        return Base.Image.newBuilder()
                .setId(id.toString())
                .setSmallUrl(smallUrl)
                .setMediumUrl(mediumUrl)
                .setLargeUrl(largeUrl)
                .setAltText(altText)
                .build();
    }
}

