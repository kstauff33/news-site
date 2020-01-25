package life.kylestauffer.snews.auth;

import life.kylestauffer.snews.generated.Base;
import life.kylestauffer.snews.model.Author;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Nonnull
    private String username;

    @Nonnull
    private String password;

    @Nonnull
    private String role;

    @OneToOne
    @Nullable
    private Author author;

    @Override
    public String toString() {
        return "ApplicationUser: " + id + " | " + username;
    }

    public Base.UserRole getRoleAsRole() {
        return Base.UserRole.valueOf(role);
    }
}
