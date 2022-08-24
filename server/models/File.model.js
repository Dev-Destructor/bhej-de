const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  downloadCount: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    data: Buffer,
    contentType: String,
  }
})

module.exports = mongoose.model('File', fileSchema);
