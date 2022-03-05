#!/bin/sh
# Esperar a que responda la url
MYURL=$1

until $(curl --output /dev/null --silent --head --fail "$MYURL"); do
    printf '.'
    sleep 5
done
echo