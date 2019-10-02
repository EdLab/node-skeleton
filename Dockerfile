FROM node:12-alpine as builder

WORKDIR /prj

COPY ./package*.json ./
COPY .npmrc ./
RUN npm i --production
RUN cp -R node_modules /tmp/node_modules

RUN npm i
COPY . /prj

RUN npm run build

FROM node:12-alpine as runer

LABEL maintainer="EdLab IT <edlabit@tc.columbia.edu>"

RUN apk add --update tzdata
RUN export TZ='America/New_York' && cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ >/etc/timezone
RUN apk del tzdata

ENV NODE_ENV production

WORKDIR /prj

COPY --from=builder /prj/public ./public
COPY --from=builder /prj/dist ./dist
COPY --from=builder /tmp/node_modules ./node_modules
COPY . .


ENTRYPOINT ["npm", "run"]
