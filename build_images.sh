cd junk
docker save -o server.tar life.kylestauffer/snews
docker save -o client.tar life.kylestauffer/snews-web
docker save -o proxy.tar life.kylestauffer/proxy
tar czvf images.tar.gz *.tar
scp -i ~/.ssh/snews-keys.pem images.tar.gz ec2-user@snews.kylestauffer.life:~/