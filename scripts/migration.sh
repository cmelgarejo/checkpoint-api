#!/bin/bash
echo ">> Running migrations"
echo "=============================="
node ./ace migration:run
if [ "$1" = "seed" ]; then
  echo ">> Seeding database"
  echo "=============================="
  node ./ace seed --files='CheckpointSeeder.js'
fi
echo "=============================="
# exit 0
