FROM node:16-alpine3.15

WORKDIR /portfolio

ENV PATH /portfolio/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install react --silent
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./
CMD ["npm", "start"]

