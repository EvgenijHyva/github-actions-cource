FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME evg-actions_demo-1
ENV MONGODB_CLUSTER_ADDRESS cluster0.tihhnqc.mongodb.net
ENV MONGODB_USERNAME user
ENV MONGODB_PASSWORD pass

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


CMD [ "npm", "start" ]