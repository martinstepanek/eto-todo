FROM node:16.14.2-alpine AS prunner
ARG APP
WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=$APP --docker


FROM node:16.14.2-alpine AS installer
ARG APP
WORKDIR /app

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update && apk add --no-cache libc6-compat

COPY --from=prunner /app/out/json/ .
COPY --from=prunner /app/out/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile


FROM node:16.14.2-alpine
ARG APP

WORKDIR /app

COPY --from=prunner /app/out/full/ .
COPY --from=installer /app/ .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3000

RUN yarn run build --scope=$APP --includeDependencies --no-deps

WORKDIR /app/apps/${APP}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 app
RUN chown app:nodejs .
USER app

EXPOSE 3000
CMD ["yarn", "run", "start"]
