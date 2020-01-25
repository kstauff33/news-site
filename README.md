# news-site

# Serving the web client
cd web-client
ng serve
See the readme in the web-client directory for more. This will require installing the angular cli


# Running the web proxy
Currently grpc-web doesn't support grpc connections without an intermediary proxy. 
install grpcwebproxy https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy
run: `grpcwebproxy --backend_addr=localhost:9090 --run_tls_server=false --allow_all_origins`


# Running the server
Create a new properties file containing the following:
`
spring.datasource.url=jdbc:<db connection>
spring.datasource.username=<db user>
spring.datasource.password=<db password>
`
cd server
./gradlew bootRun 

