package life.kylestauffer.snews.model;

import life.kylestauffer.snews.generated.Base;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Calendar;
import java.util.Set;
import java.util.stream.Collectors;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "posts")
public class PostModel extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String title;

    @Builder.Default
    private boolean isPublished = false;

    @Column
    private String tagline;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar date;

    @Column(length = 100000)
    private String text;

    @Column
    private String audioUrl;

    @Column
    private Long views;

    @ManyToOne(fetch = FetchType.EAGER)
    private Author author;

    @OneToOne()
    private Image image;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private Set<Tag> tags;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "post")
    private Set<ContextUrl> contextUrls;

    public Base.SimplePost toProto() {
        Base.SimplePost.Builder builder = Base.SimplePost.newBuilder();
        builder.setId(id.toString())
                .setTitle(title)
                .setTagline(tagline)
                .setText(text)
                .setAudioUrl(audioUrl == null ? "" : audioUrl)
                .addAllContextUrls(contextUrls.stream().map(ContextUrl::getUrl).collect(Collectors.toList()))
                .addAllTags(tags.stream().map(Tag::toProto).collect(Collectors.toList()));
        if (author != null) builder.setAuthor(author.toProto());
        if (image != null) builder.setImage(image.toProto());
        return builder.build();
    }

    public static PostModel fromProto(Base.SimplePost post) {
        return PostModel.builder()
                .id(StringUtils.isEmpty(post.getId()) ? null : Long.parseLong(post.getId()))
                .title(post.getTitle())
                .text(post.getText())
                .audioUrl(post.getAudioUrl())
                .tagline(post.getTagline())
                .contextUrls(post.getContextUrlsList() == null ? null : post.getContextUrlsList().stream().map(ContextUrl::fromString).collect(Collectors.toSet()))
                .author(post.getAuthor() == null || StringUtils.isEmpty(post.getAuthor().getId()) ? null : Author.fromProto(post.getAuthor()))
                .image(post.getImage() == null || StringUtils.isEmpty(post.getImage().getId()) ? null : Image.fromProto(post.getImage()))
                .tags(post.getTagsList() == null ? null : post.getTagsList().stream().map(Tag::fromProto).collect(Collectors.toSet()))
                .build();
    }
}




