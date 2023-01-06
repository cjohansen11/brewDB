#!/bin/bash

FROM node:18

WORKDIR /opt/app/

COPY package.json /opt/app/
COPY yarn.lock /opt/app/
COPY packages/ /opt/app/
COPY apps/api /opt/app/apps/api/
COPY tsconfig.json /opt/app/

RUN yarn install

EXPOSE 3000

WORKDIR /opt/app/

ENTRYPOINT [ "yarn", "api:build" ]