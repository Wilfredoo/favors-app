const mongoose = require("mongoose");

const favorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"]
    },
    description: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Favors = new mongoose.model("favors", favorSchema);

exports.Favors = Favors;