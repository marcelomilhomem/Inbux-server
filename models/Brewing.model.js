const { Schema, model } = require("mongoose");

const brewingSchema = new Schema({
    title: String,
    coffeeGrind: String,
    quantity: String,
    extractionTime: Number,
    waterTemperature: Number,
    advice: String,
});

const Brewing = model("Brewing", brewingSchema);

module.exports = Brewing;
