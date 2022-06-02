const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imgUrl: String,
    store: String,
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    favourites: [{
      type: Schema.Types.ObjectId,
      ref: "Coffe"
    }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
