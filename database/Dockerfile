FROM mongo:latest

ARG HOST=localhost
ARG USERNAME=productListUser
ARG PASSWORD=productListPassword

COPY 01-products.json /init.json
CMD mongoimport --host ${HOST} --username ${USERNAME} --password ${PASSWORD} --authenticationDatabase admin --db promotions --collection products  --mode upsert  --file /init.json
