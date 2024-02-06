FROM node:20

WORKDIR /schoolweb

COPY . .

RUN npm install

# Предполагается, что у вас есть команда сборки в скриптах package.json
RUN npm run build

WORKDIR /schoolweb/.output/server

CMD [ "node", "index.mjs"]
EXPOSE 3000