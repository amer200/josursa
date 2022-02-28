const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    uniqui: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
