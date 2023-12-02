FROM node:17-alpine

RUN npm install -g nodemon

RUN npm install -g serve 

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]