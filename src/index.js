import dotenv from 'dotenv';
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import  mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

dotenv.config({ debug: process.env.DEBUG })

// Destructuring env vars to be used later
const {HOST, PORT, MONGO_DB, MONGO_USER, MONGO_PASS} = process.env
// console.log(HOST, PORT, MONGO_DB, MONGO_USER, MONGO_PASS);

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });


   await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.oc6bf.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  });

  //    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.oc6bf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
  //   useNewUrlParser: true
  // });

  // app.listen({ port: 4000 }, () =>
    app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`)
  );
};

startServer();