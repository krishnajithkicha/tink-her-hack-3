const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  phoneNumber: { type: String },
  profilePicture: { type: String }, // Path to the uploaded image
});

module.exports = mongoose.model('User', userSchema);
