const mongoose = require("mongoose");

const Coffee = require("../models/Coffee.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const coffeesArr = [
  {title: "Sumatra", origin: "Indonesia", description: "Bold, dark roast coffeee"},
  {title: "Pike Place", origin: "Latin America", description: "Medium balanced coffee"}
];

Coffee.create(coffeesArr)
  .then((createdCoffee) => {
    console.log(`Created ${createdCoffee.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));