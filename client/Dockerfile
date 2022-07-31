## STAGE 1
## Add dependencies
FROM node:16-alpine AS deps
WORKDIR /usr/src

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

## STAGE 2
## Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /usr/src

ARG IDENTITY_URL
ARG GRAPHQL_HOST
ENV IDENTITY_URL=${IDENTITY_URL}
ENV GRAPHQL_HOST=${GRAPHQL_HOST}

COPY src src
COPY public public
COPY next.config.js .
COPY package.json .
COPY tsconfig.json .
COPY next-env.d.ts .
COPY package.json yarn.lock ./

RUN yarn install
RUN yarn build

## STAGE 3
## Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ARG PORT

ENV NODE_ENV production
ENV PORT=${PORT}

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /usr/src/.next ./.next
COPY --from=builder /usr/src/public ./public
COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/next.config.js ./
COPY --from=builder /usr/src/package.json ./package.json

USER nextjs

EXPOSE $PORT

ENTRYPOINT []
CMD ['yarn run start -p ${PORT}']