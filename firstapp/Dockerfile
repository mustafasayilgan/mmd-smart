FROM --platform=linux/amd64 node:11.15

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8080

EXPOSE 8080

CMD [ "npm", "start" ]
