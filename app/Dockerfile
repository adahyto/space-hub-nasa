FROM node:10 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm i --force

COPY . .

RUN npm run build --prod

EXPOSE 3003

CMD ["node", "server.js"]