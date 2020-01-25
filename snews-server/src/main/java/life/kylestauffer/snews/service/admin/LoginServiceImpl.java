package life.kylestauffer.snews.service.admin;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import io.grpc.stub.StreamObserver;
import life.kylestauffer.snews.auth.AuthConstants;
import life.kylestauffer.snews.auth.ApplicationUser;
import life.kylestauffer.snews.auth.UserDetailsServiceImpl;
import life.kylestauffer.snews.generated.Base;
import life.kylestauffer.snews.generated.LoginServiceGrpc;
import lombok.extern.slf4j.Slf4j;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Date;
import java.util.Optional;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;

@Slf4j
@GRpcService(applyGlobalInterceptors = false)
public class LoginServiceImpl extends LoginServiceGrpc.LoginServiceImplBase {

    private final AuthenticationManager authenticationManager;

    private final UserDetailsServiceImpl userDetailsService;

    @Autowired
    public LoginServiceImpl(AuthenticationManager authenticationManager, UserDetailsServiceImpl userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void register(Base.RegistrationRequest request, StreamObserver<Base.LoginResponse> responseObserver) {
        log.info("Register user");
        userDetailsService.createUser(request.getUsername(), request.getPassword());
        login(Base.LoginRequest.newBuilder()
                .setUsername(request.getUsername())
                .setPassword(request.getPassword()).build(), responseObserver);
    }

    @Override
    public void validateToken(Base.TokenValidationRequest request, StreamObserver<Base.TokenValidationResponse> responseObserver) {
        log.info("Validating token: " + request.getToken());
        String user = JWT.require(Algorithm.HMAC512(AuthConstants.SECRET.getBytes()))
                .build()
                .verify(request.getToken())
                .getSubject();

        Optional<ApplicationUser> appUser = userDetailsService.findAppUser(user);
        if (!appUser.isPresent()) {
            responseObserver.onNext(Base.TokenValidationResponse.newBuilder()
                    .setValid(false)
                    .setRole(Base.UserRole.ANONYMOUS)
                    .build());
        } else {
            responseObserver.onNext(Base.TokenValidationResponse.newBuilder()
                    .setValid(true)
                    .setRole(appUser.get().getRoleAsRole())
                    .build());
        }
    }

    @Override
    public void login(Base.LoginRequest request, StreamObserver<Base.LoginResponse> responseObserver) {
        log.info("Attempt login");
        try {
            Authentication authenticate = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword(),
                            null
                    ));

            User principal = (User) authenticate.getPrincipal();
            String token = JWT.create()
                    .withSubject(principal.getUsername())
                    .withExpiresAt(new Date(System.currentTimeMillis() + AuthConstants.EXPIRATION_TIME))
                    .sign(HMAC512(AuthConstants.SECRET.getBytes()));

            Optional<ApplicationUser> appUser = userDetailsService.findAppUser(request.getUsername());

            if (appUser.isPresent()) {
                responseObserver.onNext(Base.LoginResponse.newBuilder()
                        .setRole(appUser.get().getRoleAsRole())
                        .setToken(token).build());
            } else {
                responseObserver.onError(new UsernameNotFoundException("Unable to validate user"));
            }

            responseObserver.onCompleted();
        } catch (BadCredentialsException e) {
            responseObserver.onError(e);
        }
    }
}
