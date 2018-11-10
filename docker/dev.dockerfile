FROM node:10.11-alpine

RUN set -xe && apk add --no-cache bash sudo git openssh

WORKDIR /. /app

COPY /. .

RUN npm i

RUN npm i -g nodemon

CMD [ "./scripts/run-dev.sh" ]
