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
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Sumatra-Package1-Dark-Roast-C10-RESIZED.png.webp?itok=V21a9R8Q",
    coffeeImg2:
      "https://stories.starbucks.com/wp-content/uploads/2019/01/sumatra-women-01-1.jpg",
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
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Caffe-Veorna-Package1-Dark-Roast-C10-RESIZED.png.webp?itok=v4ujfl3E",
    title: "Caffé Verona",
    origin: "Asia Pacific and Latin America",
    description: `This is a coffee of one true love, and three names. Starbucks created Caffè Verona® for a Seattle restaurant to be paired with a luscious chocolate cake dessert. In 1975, it was named Jake's Blend. Soon customers started asking for the unique coffee in Starbucks stores.
    When Starbucks began blending the coffee for customers it was known simply as 80/20 Blend. The coffee's second name - 80/20 Blend - refers to the initial blending recipe: 80% Yukon Blend® and 20% Starbucks® Italian Roast.  With so much love for this special coffee, it's fitting that it was later named after Verona, Italy which was the setting for Shakespeare's Romeo and Juliet.   
    For years, the design on the bag of Caffè Verona had photo of a romantic bridge, presumably in Italy. In fact, the bridge was inspired by a structure in Seattle at the University of Washington Arboretum. 
    Caffè Verona is often thought of as a “crowd pleaser” or “dinner party coffee.” It has become both a partner and customer favorite and is always the first to come to mind as a coffee that pairs well with chocolate.`,
    roast: "Dark",
    processing: "Washed and Semi-Washed",
    body: "High",
    acidity: "Low",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Espresso-Package1-Dark-Roast-C10-RESIZED.png.webp?itok=NBFldDUX",
    title: "Espresso Roast",
    origin: "Asia Pacific and Latin America",
    description: "1975 Blend",
    roast: "Dark",
    processing: "Washed",
    body: "High",
    acidity: "Medium",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Colombia-package1-Medium-Roast-C10-RESIZED.png.webp?itok=ISYX87w-",
    title: "Colombia Nariño",
    origin: "Latin America, Colombia",
    description: "177cm3 rain per year",
    roast: "Medium",
    processing: "Washed",
    body: "Soft",
    acidity: "High",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/PikePlace-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=8IhYiikv",
    title: "Pike Place Roast",
    origin: "Latin America",
    description: "Pike Place Seatle",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Kenya-package1-Medium-Roast-C10-RESIZED.png.webp?itok=s2Z4--gp",
    title: "Kenya",
    origin: "Africa",
    description: "Kenya 1971",
    roast: "Medium",
    processing: "Washed",
    body: "Full",
    acidity: "High",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Guatemala-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=cPzOOetc",
    title: "Guatemala Antigua",
    origin: "Latin Amaerica, Guatemala",
    description: "Guatemala",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Ethiopia-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=Veij23To",
    title: "Ethiopia",
    origin: "Africa, Ethiopia",
    description: "Where everything started",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "High",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/House-Blend-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=ppwMMktg",
    title: "House Blend",
    origin: "Latin America",
    description: "First Coffee",
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Blonde-Espresso-Package1-Blonde-Roast-C10-RESIZED.png.webp?itok=SlS1xd8y",
    title: "Blonde Roast",
    origin: "Latin America, Africa",
    description: "",
    roast: "Blonde",
    processing: "",
    body: "",
    acidity: "",
    blend: true,
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
