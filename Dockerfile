FROM node:10.11-alpine

RUN set -xe \
    && apk add --no-cache bash git openssh

WORKDIR . /app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3333

CMD [ "npm", "start" ]
