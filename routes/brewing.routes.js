const express = require("express");
const router = express.Router();
const Brewing = require("../models/Brewing.model");

router.get("/brewing", (req, res, next) => {
  Brewing.find({})
    .then((brew) => {
      res.status(200).json(brew);
    })
    .catch(() => res.status(400).json({ message: "No coffees foud :(" }));
});

router.get("/brewing/:brewingId", (req, res, next) => {
  const { brewingId } = req.params;

  Brewing.findById(brewingId)
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(400).json({ message: "No brewing found :(" }));
});

module.exports = router;
