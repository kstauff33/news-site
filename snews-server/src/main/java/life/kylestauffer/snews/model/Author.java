package life.kylestauffer.snews.model;

import javafx.application.Application;
import life.kylestauffer.snews.auth.ApplicationUser;
import life.kylestauffer.snews.generated.Base;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;
import org.springframework.util.StringUtils;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.Set;


@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "authors")
public class Author extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    @Column
    private String name;

    @NonNull
    @OneToOne
    private Image image;

    @OneToMany(fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            mappedBy = "author")
    private Set<PostModel> posts;

    public static Author fromProto(Base.Author author) {
        return Author.builder()
                .id(StringUtils.isEmpty(author.getId()) ? null : Long.parseLong(author.getId()))
                .name(author.getName())
                .image(author.getImage() == null ? null : Image.fromProto(author.getImage()))
                .build();
    }

    public Base.Author toProto() {
        return Base.Author.newBuilder()
                .setId(id.toString())
                .setName(name)
                .setImage(image.toProto())
                .build();
    }
}

