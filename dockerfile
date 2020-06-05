FROM node:13

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY src /app

EXPOSE 3000