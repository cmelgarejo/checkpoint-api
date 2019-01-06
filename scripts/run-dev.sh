#!/bin/bash
# Windows: run this as "sh ./scripts/run-dev.sh"
echo "Running OS type: $OSTYPE"
if [ "$OSTYPE" == "msys" ] || [ "$OSTYPE" == "win32" ] ; then
  nodemon server.js
else
  sudo nodemon server.js
fi
