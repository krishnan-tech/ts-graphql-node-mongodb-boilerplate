import Post from "../../models/post";

const errFunction = (e: any) => {
  throw new Error("unable to save event because of this error: " + e.message);
};

export default {
  Query: {
    async posts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (e) {
        return errFunction(e);
      }
    },
  },

  Mutation: {
    async createPost(_: any, { title }: { title: string }) {
      try {
        console.log(title);
        const post = new Post({
          title: title,
        });
        await post.save();
        return post;
      } catch (e) {
        return errFunction(e);
      }
    },
  },
};
