FROM mhart/alpine-node:10 as base

RUN mkdir -p /platform/apps/fe-devpool

WORKDIR /platform/apps/fe-devpool

COPY package.json yarn.lock /platform/apps/fe-devpool/

RUN yarn install

COPY . .

RUN yarn build

FROM mhart/alpine-node:base-10

WORKDIR /platform/apps/fe-devpool

ENV NODE_ENV="production"

COPY --from=base /platform/apps/fe-devpool /fe-devpool

EXPOSE 8088

CMD ["node", "./node_modules/.bin/next", "start"]