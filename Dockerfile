FROM node:20

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]