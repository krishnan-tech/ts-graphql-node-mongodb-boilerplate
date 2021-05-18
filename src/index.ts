import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
require("dotenv").config();

import { typeDefs } from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

// remove this line: this message is just for testing of .env file
console.log(process.env.TEST);

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });
  await server.start();

  server.applyMiddleware({ app });

  try {
    await mongoose.connect(process.env.MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (e) {
    console.log(e.message);
    console.log("DB ERROR");
  }

  app.listen({ port: 3001 }, () =>
    console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`)
  );
};

startServer().catch((e) => {
  console.log(e);
});
