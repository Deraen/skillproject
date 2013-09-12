#!/bin/bash

#cron:
# */5 * * * * /home/juho/skillproject/build.sh

git fetch
git reset --hard origin/hard

git log -1 --format="%H" > newcommit

if diff newcommit prevcommit >/dev/null; then echo "No changes"; exit; fi

npm install
bower install
grunt deploy
