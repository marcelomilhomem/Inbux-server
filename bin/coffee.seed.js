const mongoose = require("mongoose");

const Coffee = require("../models/Coffee.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://macelo:ironHack@cluster0.ohkah.mongodb.net/Inbux?retryWrites=true&w=majority";

const coffeesArr = [
  {
    coffeeImg:
      "https://www.starbucks.com.au/imagecache/bestfit/750x750/_files/NEW-Photos-2016/Packaged-coffee/sumatra.png",
    title: "Sumatra",
    origin: "Indonesia",
    description: "Bold, dark roast coffeee",
    roast: "Dark",
    processing: "Semi-washed",
    body: "Bold",
    acidity: "Low",
    blend: false,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

Coffee.create(coffeesArr)
  .then((createdCoffee) => {
    console.log(`Created ${createdCoffee.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
