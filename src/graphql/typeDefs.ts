import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(title: String!): Post
  }
`;
