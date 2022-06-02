FROM node:16.14.2-alpine AS prunner
WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=eto-todo-graphql-api --docker

FROM node:16.14.2-alpine AS installer

ENV TZ="Europe/Prague"
WORKDIR /app

RUN apk update && apk add git

COPY --from=prunner /app/out/json/ .
COPY --from=prunner /app/out/yarn.lock /app/yarn.lock
RUN yarn install --frozen-lockfile

FROM node:16.14.2-alpine AS development

ENV TZ="Europe/Prague"
WORKDIR /app

COPY --from=prunner /app/out/full/ .
COPY --from=installer /app/ .

EXPOSE 4000
CMD yarn run dev-in-docker

FROM development AS builder

RUN yarn run build

FROM node:16.14.2-alpine as production

ENV TZ="Europe/Prague"
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 4000
ENTRYPOINT node -r /app/node_modules/dotenv/config.js /app/dist/main.js
