#!/bin/bash

kill_all() {
    docker ps | cut -d ' ' -f1 | grep -v CONTAINER | xargs docker kill
}

run_server() {
    cd snews-server
    ./gradlew build docker
    docker run -p 1234:9090 -d life.kylestauffer/snews
}

run_proxy() {
    cd proxy
    docker build -t life.kylestauffer/proxy .
    docker run -p 8080:8080 -d life.kylestauffer/proxy
}

run_web() {
    cd web-client
    npm run build
    docker build -t life.kylestauffer/snews-web .
    docker run -p 80:80 -p 443:443 -d life.kylestauffer/snews-web 
}

kill_all
run_server & 
run_proxy & 
run_web &


exit 0;
# docker run -p 80:80 -p 443:443 -d life.kylestauffer/snews-web 
# docker run -p 8080:8080 -d life.kylestauffer/proxy
# docker run -p 1234:9090 -d life.kylestauffer/snews

# docker tag life.kylestauffer/snews us.gcr.io/pbnm-82e14/snews
# docker tag life.kylestauffer/snews-web us.gcr.io/pbnm-82e14/snews-web
# docker tag life.kylestauffer/proxy us.gcr.io/pbnm-82e14/proxy
# docker push us.gcr.io/pbnm-82e14/snews
# docker push us.gcr.io/pbnm-82e14/snews-web
# docker push us.gcr.io/pbnm-82e14/proxy

# mysql
# nginx
# java
# jdk
# git
# certs

