FROM node:14-slim as build-env

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install --non-interactive --frozen-lockfile --ignore-optional --silent

COPY next-env.d.ts next.config.js tsconfig.json /app/
COPY public /app/public
COPY src /app/src
RUN yarn build

#==============================

FROM gcr.io/distroless/nodejs:14

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build-env /app /app
COPY server.js /app

CMD ["server.js"]
