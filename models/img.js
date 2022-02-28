const mongoose = require("mongoose");

const imgSchema = mongoose.Schema({
  path: String,
  categ: String,
});

module.exports = mongoose.model("Img", imgSchema);
