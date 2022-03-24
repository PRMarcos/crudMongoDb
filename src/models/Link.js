const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  
  name: String,
  url: String,
  iconUrl: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Link', LinkSchema);