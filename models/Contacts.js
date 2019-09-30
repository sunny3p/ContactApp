const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: String,
  phone: {
    mobile: String,
    work: String
  }
});
module.exports = mongoose.model('Contact', contactSchema);
