package life.kylestauffer.snews.auth;

import io.grpc.Context;
import life.kylestauffer.snews.generated.Base;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public final class AuthConstants {
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final Context.Key<ApplicationUser> AUTH_CONTEXT_KEY = Context.key("AUTH-DATA");
    public static final String TOKEN_PREFIX = "Bearer ";

    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days

//    public static final String ROLE_ADMIN = "ROLE_ADMIN";
//    public static final String ROLE_ANONYMOUS = "ROLE_ANONYMOUS";
//
//    public static final List<GrantedAuthority> ALL_AUTHORITIES = new ArrayList<>();
//    public static final String HA_ROLE_ADMIN = "hasAuthority('" + ROLE_ADMIN + "')";
//    public static final String HA_ROLE_ANONYMOUS = "hasAuthority('" + ROLE_ANONYMOUS + "')";
//
//
//    static {
//        ALL_AUTHORITIES.add(new SimpleGrantedAuthority(ROLE_ADMIN));
//        ALL_AUTHORITIES.add(new SimpleGrantedAuthority(ROLE_ANONYMOUS));
////        ALL_AUTHORITIES.add((GrantedAuthority) () -> ROLE_ANONYMOUS);
////        ALL_AUTHORITIES.add((GrantedAuthority) () -> ROLE_ADMIN);
//    }
}
