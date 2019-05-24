var express = require('express');
var router = express.Router();
var authUtils = require('../utils/auth');
var User = require('../models/user');
var DailyUpdate = require('../models/dailyUpdate');

/* POST - Create a new dailyUpdate. */
router.post('/', authUtils.verifyToken, function (req, res, next) {
  // create a dailyUpdate.
  var tweetURL = req.body.tweetURL;
  var reflection = req.body.reflection;

  if(!tweetURL || !reflection) {
    return res.status(400).send({ message: 'TweetURL and Reflections are must.'})
  }

  var newDailyUpdate = new DailyUpdate({
    tweetURL, reflection, user: req.user._id
  });

  newDailyUpdate.save(function (err, savedDailyUpdate) {
    return res.json({ dailyUpdate: savedDailyUpdate });
  });
});

/* GET - Get all dailyUpdates for currently logged in user. */
router.get('/', authUtils.verifyToken, function (req, res, next) {
  DailyUpdate.find({ user: req.user._id }).sort('-createdAt').exec(function (err, dailyUpdates) {
    return res.json({ dailyUpdates });
  });
});



module.exports = router;
