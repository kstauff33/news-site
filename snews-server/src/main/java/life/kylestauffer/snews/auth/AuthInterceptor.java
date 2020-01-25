package life.kylestauffer.snews.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import io.grpc.Context;
import io.grpc.Contexts;
import io.grpc.ForwardingServerCallListener;
import io.grpc.Metadata;
import io.grpc.ServerCall;
import io.grpc.ServerCallHandler;
import io.grpc.ServerInterceptor;
import io.grpc.Status;
import io.grpc.StatusRuntimeException;
import life.kylestauffer.snews.generated.Base;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Slf4j
@Component
public class AuthInterceptor implements ServerInterceptor {

    private final UserDetailsServiceImpl userDetailsService;

    @Autowired
    protected AuthInterceptor(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Override
    public <ReqT, RespT> ServerCall.Listener<ReqT> interceptCall(ServerCall<ReqT, RespT> call, Metadata headers, ServerCallHandler<ReqT, RespT> next) {
        log.info("Intecept Call: " + call.getMethodDescriptor().getFullMethodName());
        String token = headers.get(Metadata.Key.of(AuthConstants.AUTHORIZATION_HEADER, Metadata.ASCII_STRING_MARSHALLER));
        if (token == null) {
            throw new StatusRuntimeException(Status.UNAUTHENTICATED);
        }


        String user = JWT.require(Algorithm.HMAC512(AuthConstants.SECRET.getBytes()))
                .build()
                .verify(token.replace(AuthConstants.TOKEN_PREFIX, ""))
                .getSubject();


        Optional<ApplicationUser> appUser = userDetailsService.findAppUser(user);
        if (appUser.isPresent()) {
            Context context = Context.current().withValue(AuthConstants.AUTH_CONTEXT_KEY, appUser.get());
            return Contexts.interceptCall(context, call, headers, next);
        }
        return null;
    }

}

