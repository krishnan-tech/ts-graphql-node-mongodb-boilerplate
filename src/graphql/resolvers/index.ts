import PostResolver from "./posts";

export default {
  Query: {
    ...PostResolver.Query,
  },
  Mutation: {
    ...PostResolver.Mutation,
  },
};
