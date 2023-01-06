#!/bin/bash

yarn
yarn prisma:migrate:deploy
yarn prisma:db:seed
yarn api:dev