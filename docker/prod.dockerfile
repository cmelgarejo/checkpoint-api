FROM node:10.11-alpine

RUN set -xe && apk add --no-cache bash git openssh

WORKDIR /. /app

COPY /. .

RUN npm i

CMD [ "./scripts/run-prod.sh" ]
