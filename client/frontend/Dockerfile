FROM node:alpine

RUN mkdir -p /app
ENV PORT 3000

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

# Production use node instead of root
# USER node

RUN yarn install

COPY . /app

# RUN yarn build

EXPOSE 3000
CMD [ "yarn", "dev" ]
