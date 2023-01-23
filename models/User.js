const mongoose = require("mongoose");

const usermodel = mongoose.model("Users",mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
  })
);

module.exports = usermodel