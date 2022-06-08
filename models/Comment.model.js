const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  comment: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  type: { type: String }
});

const Comment = model("Comment", commentsSchema);

module.exports = Comment;
