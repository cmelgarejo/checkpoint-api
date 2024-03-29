FROM node:11.6-alpine

RUN set -xe && apk add --no-cache bash sudo git openssh

WORKDIR /. /app

COPY /. .

RUN npm i

CMD [ "./scripts/run-prod.sh" ]
