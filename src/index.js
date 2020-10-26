import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import  mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

 await mongoose.connect("mongodb+srv://scott1234:scott1234@cluster0.oc6bf.mongodb.net/react-eccommerce-site?retryWrites=true&w=majority", {
    useNewUrlParser: true
  });

  //  await mongoose.connect(`${process.env.MONGO_URI}`, {
  //   useNewUrlParser: true
  // });
  
  // await mongoose.connect("mongodb://localhost:27017/test3", {
  //   useNewUrlParser: true
  // });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();