const mongoose = require("mongoose");

const Brewing = require("../models/Brewing.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://macelo:ironHack@cluster0.ohkah.mongodb.net/Inbux?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const brewingArr = [
  {
    title: "Chemex",
    image:
      "https://images.unsplash.com/photo-1574359172160-c7ae4fadcacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80",
    coffeeGrind: "Medium coarse (coarse | rough sand)",
    quantity: "10 g coffe for 120 ml - 180 ml water",
    extractionTime: "3",
    waterTemperature: "94",
    advice:
      "Get the most out of our coffee by using a quality conical burr grinder, a scale, a timer and high-quality water. The standard golden ratio for Chemex® is 1g coffee to 15-18g water (1:15-18)",
  },
  {
    title: "Kalita",
    image:
      "https://images.unsplash.com/photo-1641687780864-11dbb9fff7fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    coffeeGrind: "Medium coarse (coarse | rough sand)",
    quantity: "15 g of coffee to 230 g of water",
    extractionTime: "3",
    waterTemperature: "94",
    advice:
      "Get the most out of our coffee by using a quality conical burr grinder, a scale, a timer and high-quality water. The standard golden ratio for Kalita® is 1g coffee to 15-18g water (1:15-18)",
  },
  {
    title: "v60",
    image:
      "https://images.unsplash.com/photo-1620051524446-5160985790e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    coffeeGrind: "Medium coarse (coarse | rough sand",
    quantity: "10 g coffee for 120 ml - 180 ml water",
    extractionTime: "3",
    waterTemperature: "94",
    advice:
      "Get the most out of our coffee by using a quality burr grinder, a scale, a timer and high-quality water. The standard golden ratio for V60 is 1g coffee to 15-18g water (1:15-18)",
  },
  {
    title: "Aeropress",
    image:
      "https://images.unsplash.com/photo-1643945016492-e95a055908d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    coffeeGrind: "Medium coarse (rough sand)",
    quantity: "18 g of coffee to 220 g of water",
    extractionTime: "1",
    waterTemperature: "92",
    advice:
      "Get the most out of our coffee by using a quality conical burr grinder, a scale, a timer and high-quality water. This recipe is known as an 'Inverted' method.",
  },
];

Brewing.insertMany(brewingArr)
  .then((createdBrew) => {
    console.log(`Created ${createdBrew.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
