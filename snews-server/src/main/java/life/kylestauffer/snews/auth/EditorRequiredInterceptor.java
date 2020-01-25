//package life.kylestauffer.snews.auth;
//
//import life.kylestauffer.snews.generated.Base;
//import org.springframework.beans.factory.annotation.Autowired;
//
//public class EditorRequiredInterceptor extends BaseAuthInterceptor {
//    @Autowired
//    public EditorRequiredInterceptor(UserDetailsServiceImpl userDetailsService) {
//        super(userDetailsService);
//    }
//
//    @Override
//    protected Base.UserRole getRequiredRole() {
//        return Base.UserRole.EDITOR;
//    }
//}
