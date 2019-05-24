var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dailyUpdateSchema = new Schema({
  tweetURL: { type: String, required: true },
  reflection: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('DailyUpdate', dailyUpdateSchema);