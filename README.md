# Node Angular Bowling
App to keep track of bowling score. The main idea was to build api server and client separately and then deploy as a single docker container.

## Structure

### Shared
Here are the shared models and utils used by both the server and client.

### Server
This is the backend API server used by the client to save and fetch data.

## Prerequisits
You need `node` and `npm` installed.

## Installing
All sub-projects are built using npm. Go into each folder and run install.

```
npm install
```

## Development

Run client and server separately. Both client and server watch for changes to increase efficiency when developing.

**Server**
```
npm run start
```

**Client**
```
npm run start
```

## Running the tests
The tests are started with npm script test on each separate sub-project.

**Server, Client, Shared**
```
npm run test
```

## Deployment

Build server and client separatley.
```
npm run build
```

Build Docker container
```
docker build -t johankvint/node-angular-bowling .
```

Run Docker container
```
docker run -d -p 9000:9000 johankvint/node-angular-bowling
```

## TODO
The idea was to create a Dockerfile and pull in the compiled server and client. Currently server build only works as a API-server and Client build only generates HTML and JavaScript but no server to serve the files. Need to update the Server part to be ablo to serve static files before they are pulled together into a docker container.

* Refactor client to better components for better testability
* Create tests for client