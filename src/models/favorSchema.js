const mongoose = require("mongoose");

const favorSchema = new mongoose.Schema(
  {
    title: {type: String},
    description: {type: String},
    asker: {type: String},
    ayniPoints: {type: Number},
    location: { type: String},
    phone: {type: Number}

  },
  {timestamps: true}
);

const Favors = new mongoose.model("favors", favorSchema);

exports.Favors = Favors;