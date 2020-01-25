package life.kylestauffer.snews.model;

import life.kylestauffer.snews.generated.Base;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Slf4j
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tags")
public class Tag extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String tag;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            mappedBy = "tags")
    private List<PostModel> posts;

    public Base.Tag toProto() {
        return Base.Tag.newBuilder().setId(id.toString()).setTag(tag).build();
    }

    public static Tag fromProto(Base.Tag tag) {
        log.info("Tag: " + tag.getTag() + " into proto");
        return Tag.builder()
                .id(Long.parseLong(tag.getId()))
                .tag(tag.getTag())
                .build();
    }
}
