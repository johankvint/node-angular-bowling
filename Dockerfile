FROM node:8.11.4-alpine

# Set work dir
WORKDIR /usr/src/app

# Copy compiled server
COPY server/dist/server.js .

# Copy compiled client
COPY client/dist/**/* ./static/

EXPOSE 9000
CMD [ "node", "server.js" ]