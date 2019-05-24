var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  githubUsername: { type: String, required: true, unique: true },
  githubId: { type: String, required: true, unique: true },
  photoURL: { type: String, required: true, unique: true },
  twitterUsername: { type: String, unique: true },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.pre('save', function() {
  this.email == 'prashant.abhishek7g@gmail.com' ? this.isAdmin = true : null;
  next();
});

module.exports = mongoose.model('User', userSchema);