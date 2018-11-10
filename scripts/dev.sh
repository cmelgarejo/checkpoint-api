#!/bin/bash
# Windows: run this as "sh ./scripts/dev.sh"
docker-compose stop dev
docker-compose build dev
if [ "$1" = "seed" ]; then
  docker-compose run dev ./scripts/migrate.sh $1
fi
docker-compose up dev
