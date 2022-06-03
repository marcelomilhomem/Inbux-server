const router = require("express").Router();
const User = require("../models/User.model");
const Coffee = require("../models/Coffee.model");
const Comment = require("../models/Comments.model");

router.post("/post/:id/comment", (req, res, next) => {
  const { author, text } = req.body;
  const { id } = req.params;

  Comment.create({ author, text }).then((createdComment) => {
    return Coffee.findByIdAndUpdate(id, {
      $push: { comments: createdComment._id },
    })
      .then((updatedPost) => {
        res.status(200).json(updatedPost);
      })
      .catch(() => res.status(400).json({ message: "No coffee found :(" }));
  });
});
router.delete("/comment/:commentId", (req, res, next) => {
  const { commentId } = req.params;
  Comment.findByIdAndDelete(commentId)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(400).json({ message: "Comment not found :(" }));
});

module.exports = router;
