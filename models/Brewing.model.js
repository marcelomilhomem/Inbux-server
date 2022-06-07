const { Schema, model } = require("mongoose");

const brewingSchema = new Schema({
  title: String,
  imgUrl: String,
  coffeeGrind: String,
  quantity: String,
  extractionTime: String,
  waterTemperature: String,
  advice: String,
});

const Brewing = model("Brewing", brewingSchema);

module.exports = Brewing;
