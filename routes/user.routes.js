const router = require("express").Router();
const User = require("../models/User.model");

router.get("/user", (req, res, next) => {
  const { _id } = req.payload;
  User.findById(_id)
    .then((userFromDB) => res.status(200).json(userFromDB))
    .catch((err) => res.status(400).json({ message: "User not found!!" }));
});

router.put("/user", (req, res, next) => {
  const { _id } = req.payload;
  const { username, store, imgUrl } = req.body;
  console.log(req.body)

  User.findByIdAndUpdate(
    _id,
    {
      username,
      store,
      imgUrl,
    },
    { new: true }
  )

    .then((response) => res.json(response))
    .catch((err) => res.status(400).json({ message: "No user updated" }));
});

router.delete("/user/delete", (req, res, next) => {
  const { _id } = req.payload;
  User.findByIdAndRemove(_id)
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(400).json({ message: "Invalid username supplied" })
    );
});

module.exports = router;
