#!/bin/bash
cd client
npm run build
cd ../server
npm run build
cd ..
docker build -t johankvint/node-angular-bowling .