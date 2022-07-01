FROM node:lts-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package.json package-lock.json

RUN npm i -g @adonisjs/cli --legacy-peer-deps

RUN npm install mysql --save

RUN apk add --no-cache git

COPY . /home/node/app/

RUN chown -R node:node /home/node

RUN npm ci

USER node

# RUN mkdir tmp

EXPOSE 8080

ENTRYPOINT ["npm","start"]

# CMD [ "adonis", "serve", "--dev" ]
