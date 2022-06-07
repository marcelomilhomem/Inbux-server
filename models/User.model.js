const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    store: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imgUrl: {type: String, default: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg"},
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    favourites: [{
      type: Schema.Types.ObjectId,
      ref: "Coffee"
    }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
