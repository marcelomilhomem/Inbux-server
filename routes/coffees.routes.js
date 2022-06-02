const express = require("express");
const router = express.Router();
const Coffee = require("../models/Coffee.model");

router.get("/coffees", (req, res, next) => {
  Coffee.find({})
    .then((coffees) => {
      res.status(200).json(coffees);
    })
    .catch(() => res.status(400).json({ message: "No coffees foud :(" }));
});

router.get("/coffees/create", (req, res, next) => {
  const {
    coffeeImg,
    title,
    origin,
    description,
    roast,
    processing,
    body,
    acidity,
    blend,
    coffeeType,
  } = req.body;

  Coffee.create({
    coffeeImg,
    title,
    origin,
    description,
    roast,
    processing,
    body,
    acidity,
    blend,
    comments: [],
    coffeeType,
  })
    .then((createdCoffee) => {
      res.status(200).json(createdCoffee);
    })
    .catch(() =>
      res.status(400).message({ message: "Error creating coffee!" })
    );
});

router.put("/coffees/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const {
    coffeeImg,
    title,
    origin,
    description,
    roast,
    processing,
    body,
    acidity,
    blend,
    coffeeType,
  } = req.body;

  Coffee.findByIdAndUpdate(id, {
    coffeeImg,
    title,
    origin,
    description,
    roast,
    processing,
    body,
    acidity,
    blend,
    coffeeType,
  })
    .then((coffee) => {
      res.status(200).json(coffee);
    })
    .catch(() => res.status(400).json({ message: "Error editing coffee!" }));
});

router.delete("/coffees/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Coffee.findByIdAndRemove(id)
    .then(() => {
      res.status(200)
    })
    .catch(() => res.status(400).json({message: "Error deleting coffee!"}))
});


module.exports = router;
