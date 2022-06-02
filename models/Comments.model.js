const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  comment: String,
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

const Comments = model("Comments", commentsSchema);

module.exports = Comments;
