//package life.kylestauffer.snews.auth;
//
//import life.kylestauffer.snews.generated.Base;
//import org.springframework.beans.factory.annotation.Autowired;
//
//public class AuthorRequiredInterceptor extends BaseAuthInterceptor {
//
//    @Autowired
//    public AuthorRequiredInterceptor(UserDetailsServiceImpl userDetailsService) {
//        super(userDetailsService);
//    }
//
//    @Override
//    protected Base.UserRole getRequiredRole() {
//        return Base.UserRole.AUTHOR;
//    }
//}
