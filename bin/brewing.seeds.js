const mongoose = require("mongoose");

const Brewing = require("../models/Brewing.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://macelo:ironHack@cluster0.ohkah.mongodb.net/Inbux?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo!"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const brewingArr = [
  {name: "Chemex"},
  {name: "Aeropress"}
];

Brewing.insertMany(brewingArr)
  .then((createdBrew) => {
    console.log(`Created ${createdBrew.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));