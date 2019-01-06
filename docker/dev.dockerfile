FROM node:11.6-alpine

RUN set -xe && apk add --no-cache bash sudo git openssh

WORKDIR /app

ADD . /app

RUN npm i

RUN npm i -g nodemon

CMD [ "./scripts/run-dev.sh" ]
