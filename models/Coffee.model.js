const { Schema, model } = require("mongoose");

const coffeeSchema = new Schema({
  coffeeImg: String,
  title: String,
  origin: String,
  description: String,
  roast: String,
  processing: String,
  body: String,
  acidity: String,
  blend: Boolean,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}], 
  coffeeType: {
    type: String,
    enum: ["Starbucks", "userCreation"],
    default: "userCreation",
  },
});

const Coffee = model("Coffee", coffeeSchema);

module.exports = Coffee;