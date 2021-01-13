const mongoose = require("mongoose");
const { Schema } = mongoose;

const fragSchema = new Schema(
  {
    Player: {type: String},
    Identifier: {type: String},
    Weapon: {type: String},
    Against: {type: String},
    Score: {type: String},
    Event: {type: String},
    Map: {type: String},

  },
  { timestamps: false }
);

module.exports = mongoose.model("Frag", fragSchema, "Frags");
