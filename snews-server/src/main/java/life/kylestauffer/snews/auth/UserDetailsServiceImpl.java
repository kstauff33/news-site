package life.kylestauffer.snews.auth;

import life.kylestauffer.snews.generated.Base;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static java.util.Collections.emptyList;

@Slf4j
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final ApplicationUserRepository applicationUserRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserDetailsServiceImpl(ApplicationUserRepository applicationUserRepository, BCryptPasswordEncoder passwordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<ApplicationUser> applicationUser = applicationUserRepository.findByUsername(username);
        if (!applicationUser.isPresent()) {
            throw new UsernameNotFoundException(username);
        }
        return new User(applicationUser.get().getUsername(), applicationUser.get().getPassword(), emptyList());
    }

    @Transactional
    public ApplicationUser createUser(String username, String password) {
        return applicationUserRepository.save(ApplicationUser.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .role(Base.UserRole.READER.name())
                .build());
    }

    public Optional<ApplicationUser> findAppUser(String username) {
        return applicationUserRepository.findByUsername(username);
    }
}

