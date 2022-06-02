const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: {
      type: String,
      required: true,
    },
    imgUrl: String,
    store: String,
    blockNotes: [
      {
        coffee: {type: Schema.Types.ObjectId, ref: "Coffee"},
        description: String,
      },
    ],
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
