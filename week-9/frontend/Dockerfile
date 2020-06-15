FROM node:14.4.0-alpine3.11

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
