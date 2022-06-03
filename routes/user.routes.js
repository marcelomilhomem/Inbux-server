const router = require("express").Router();
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

router.get('/user/:username', (req, res, next) => {
    const { username } = req.params;
    User.find({ username })
      .then((userFromDB) => res.status(200).json(userFromDB))
      .catch((err) => res.status(400).json({ message: 'User not found!!' }));
  });
  
  router.put('/user/:userId', fileUploader.single('userImage'), (req, res, next) => {
    const { userId } = req.params;
    const { username, password } = req.body;
    if (req.file) {
      User.findByIdAndUpdate(
        userId,
        {
          username,
          password,
          image: req.file.path,
        },
        { new: true }
      )
  
        .then((response) => res.json(response))
        .catch((err) => res.status(400).json({ message: 'No user updated' }));
    } else {
      User.findByIdAndUpdate(
        userId,
        {
          username,
          password,
        },
        { new: true }
      )
  
        .then((response) => res.json(response))
        .catch((err) => res.status(400).json({ message: 'No user updated' }));
    }
  });
  
  router.delete('/user/:userId/delete', (req, res, next) => {
    const { userId } = req.params;
    User.findByIdAndRemove(userId)
      .then((response) => res.json(response))
      .catch((err) => res.status(400).json({ message: 'Invalid username supplied' }));
  });
  

module.exports = router;