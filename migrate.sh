#!/bin/bash
node ace migration:run
if [ "$1" = "seed" ]; then
	echo "Seeding database"
  node ace seed
fi
exit 0
