const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
  location: String,
  area: Number,
  owner: String,
  status: {
    type: String,
    enum: ["public", "private", "disputed"],
    default: "public",
  },
  value: Number,
  encroached: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Land", landSchema);
