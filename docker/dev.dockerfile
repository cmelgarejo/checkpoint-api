FROM node:10.11-alpine

RUN set -xe && apk add --no-cache bash git openssh

WORKDIR /. /app

COPY /. .

RUN npm i

# RUN node ace

# RUN node ace seed
# CMD [ "node", "ace", "migration:run"]
# CMD [ "node", "ace", "seed"]
ENTRYPOINT [ "npm", "start" ]
