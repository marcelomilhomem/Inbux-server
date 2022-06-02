const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  comment: String,
});

const Comments = model("Comments", commentsSchema);

module.exports = Comments;
