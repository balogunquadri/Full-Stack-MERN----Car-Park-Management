const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  platenumber: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  vehtype: {
    type: String,
    required: true,
    default: "Car"
  },
  isconfirmed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("guest", guestSchema);
