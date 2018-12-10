FROM node:11.4-alpine

RUN set -xe && apk add --no-cache bash sudo git openssh

WORKDIR /. /app

COPY /. .

RUN npm i

RUN npm i -g nodemon

CMD [ "./scripts/run-dev.sh" ]
