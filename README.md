# Basic GraphQL server using MongoDB

## Pre-Reqs

- node to be able to run npm or yarn to install dependencies and run a server
- github to be able to clone/copy repo
- Need MongoDB account and cluster created to be able to add collections (free tier should be fine)

Also uses the following dependencies via npm install (or yarn add)

- mongoose - used for MongoDB connectivity
- nodemon - to auto-restart node server when changes are made
- dotenv - used for environment vars.

To set up the project

## Step 1: Clone or Copy the repo

git clone https://github.com/scottwcode/mongodb-graphql-server

## Step 2: cd into your local cloned repo and run:

npm install

## Step 3: Create an .env file and add your connectivity info in it

PORT=4000
HOST=localhost
MONGO_USER=<YOUR-MONGO-USER-ID>
MONGO_PASS=<YOUR-MONGO-USER-PASSWD>
MONGO_DB=<MONGO-DB-YOU-WANT-TO-USE>
##Step 4: Start the API by running the following

npm start

### Author

ScottW

### License

This project is licensed under the MIT License.
