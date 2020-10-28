# Basic GraphQL server using MongoDB

## Pre-Reqs

- node to be able to run npm to install dependencies and run a node server
- github account if you want to clone/copy repo
- MongoDB account with a cluster created to be able to add collections (free tier should be fine)

Also uses the following dependencies via npm install

- mongoose - used for MongoDB connectivity
- express - popular library for Node.js
- apollo-server - A library that helps connect a GraphQL schema to an HTTP server in Node
- apollo-server-express - Connectivity between Apollo Server and Express
- nodemon - to auto-restart node server when changes are made
- dotenv - used for environment vars.

To set up the project

## Step 1: Clone or Copy the repo

```bash
git clone https://github.com/scottwcode/mongodb-graphql-server
```

## Step 2: cd into your local cloned repo and run the following to update dependencies:

```bash
npm install
```

## Step 3: Create an .env file and add your connectivity info in it

```bash
PORT=4000
HOST=localhost
MONGO_USER=YOUR-MONGO-USER-ID
MONGO_PASS=YOUR-MONGO-USER-PASSWD
MONGO_DB=MONGO-DB-YOU-WANT-TO-USE
```

## Step 4: Start the API by running the following

```bash
npm start
```

## Step 5: Add any dogs you would like through graphql at your localhost and port

http://localhost:4000/graphql

![graph QL createDog screenshot](screenshots/graphQL-createdog.png 'graphQL-createDog-mutation')

## Step 6: See the dogs you added in your MongoDB in a collection called dogs

![MongoDB dogs collection screenshot](screenshots/mongoDB-createdog.png 'mongoDB-dogs-collection')

### Author

ScottW

### License

This project is licensed under the MIT License.
