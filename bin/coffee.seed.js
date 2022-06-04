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
    origin: "Asia Pacific, Sumatra",
    description: "Bold, dark roast coffeee",
    roast: "Dark",
    processing: "Semi-Washed",
    body: "Bold",
    acidity: "Low",
    blend: false,
  },
  {
    coffeeImg: "",
    title: "Caffé Verona",
    origin: "Asia Pacific and Latin America",
    description: "Romantic Coffee",
    roast: "Dark",
    processing: "Washed and Semi-Washed",
    body: "High",
    acidity: "Low",
    blend: true
  },
  {
    coffeImg: "",
    title: "Espresso Roast",
    origin: "Asia Pacific and Latin America",
    description: "1975 Blend",
    roast: "Dark",
    processing: "Washed",
    body: "High",
    acidity: "Medium",
    blend: true
  },
  {
    coffeeImg: "",
    title: "Colombia Nariño",
    origin: "Latin America, Colombia",
    description: "177cm3 rain per year",
    roast: "Medium",
    processing: "Washed",
    body: "Soft",
    acidity: "High",
    blend: false
  },
  {
    coffeImg: "",
    title: "Pike Place Roast",
    origin: "Latin America",
    description: "Pike Place Seatle",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: true
  },
  {
    coffeImg: "",
    title: "Kenya",
    origin: "Africa",
    description: "Kenya 1971",
    roast: "Medium",
    processing: "Washed",
    body: "Full",
    acidity: "High",
    blend: false
  },
  {
    coffeeImg: "",
    title: "Guatemala Antigua",
    origin: "Latin Amaerica, Guatemala",
    description: "Guatemala",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: false
  },
  {
    coffeImg: "",
    title: "Ethiopia",
    origin: "Africa, Ethiopia",
    description: "Where everything started",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "High",
    blend: false
  },
  {
    coffeImg: "",
    title: "House Blend",
    origin: "Latin America",
    description: "First Coffee",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: true
  },
  {
    coffeImg: "",
    title: "Blonde Roast",
    origin: "Latin America, Africa",
    description: "",
    roast: "Blonde",
    processing: "",
    body: "",
    acidity: "",
    blend: true
  }
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
