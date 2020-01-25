package life.kylestauffer.snews.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.lang.NonNull;
import life.kylestauffer.snews.generated.Base;

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
@Table(name = "subscriptions")
public class Subscription extends AuditModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    @Column
    private String email;

    @NonNull
    @Column
    private boolean news;

    @NonNull
    @Column
    private boolean opinion;
    @NonNull
    @Column
    private boolean podcasts;

    public Base.Subscription toProto() {
        return Base.Subscription.newBuilder()
                .setEmail(email)
                .setId(id.toString())
                .setNews(news)
                .setOpinion(opinion)
                .setPodcasts(podcasts)
                .build();
    }

    public static Subscription fromProto(Base.Subscription subscription) {
        return Subscription.builder()
                .id(Long.parseLong(subscription.getId()))
                .email(subscription.getEmail())
                .news(subscription.getNews())
                .opinion(subscription.getOpinion())
                .podcasts(subscription.getPodcasts())
                .build();
    }
}
