const router = require("express").Router();
const User = require("../models/User.model");
const Coffee = require("../models/Coffee.model");
const Comment = require("../models/Comment.model");

router.post("/post/:id/comment", (req, res, next) => {
  const { comment } = req.body;
  const { id } = req.params;
  const { _id } = req.payload;

  Comment.create({ author: _id, comment }).then((createdComment) => {
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

router.post("/suggestion", (req, res, next) => {
  const { _id } = req.payload;
  const { comment } = req.body;

  Comment.create({ author: _id, type: "suggestion", comment })
    .then((createdComment) => {
      res.status(200).json(createdComment);
    })
    .catch(() => res.status(400).json({ message: "Sorry" }));
});

router.get("/suggestion", (req, res, next) => {
  Comment.find({ type: "suggestion" })
    .populate("author")
    .then((suggestions) => {
      res.status(200).json(suggestions);
    })
    .catch(() =>
      res.status(400).json({ message: "Sorry, no suggestions here" })
    );
});

module.exports = router;
