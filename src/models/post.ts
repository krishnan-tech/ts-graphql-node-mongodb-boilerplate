import { Document, model, Schema } from "mongoose";

interface PostSchema extends Document {
  title: string;
}

const postSchama = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export default model<PostSchema>("Post", postSchama);
