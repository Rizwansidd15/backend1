const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});

const usermodel = mongoose.model("user", UserSchema);

module.exports = usermodel;
