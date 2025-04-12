const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  name: String,
  email: String,
  items: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', DonationSchema);