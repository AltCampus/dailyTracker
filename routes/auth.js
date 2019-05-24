var express = require('express');
var router = express.Router();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var config = require('../utils/config');
var User = require('../models/user');
var authUtil = require('../utils/auth');

passport.use(new GitHubStrategy({
  clientID: config.githubClientID,
  clientSecret: config.githubClientSecret,
  callbackURL: "http://localhost:3000/auth/github/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    console.log(profile, 'github data');
    var jsonProfile = profile._json;
    User.findOne({ email: jsonProfile.email }, function (err, foundUser) {
      if (foundUser) {
        return cb(null, foundUser);
      }

      var newUser = new User({
        name: jsonProfile.name,
        email: jsonProfile.email,
        photoURL: jsonProfile.avatar_url,
        githubId: profile.id,
        githubUsername: profile.username
      });

      newUser.save(function (err, savedUser) {
        return cb(null, savedUser);
      });
    })
  }
));

/* GET Github Login. */
router.get('/github', passport.authenticate('github'));

/* GET Github Callback data. */
router.get('/github/callback', function(req, res, next) {
  passport.authenticate('github', function(err, user) {

    if(err) {
      return res.send({ message: 'Something went wrong with github auth' });
    }
    // generate token here
    var token = authUtil.signToken({ _id: user._id, isAdmin: user.isAdmin });
    // send the response it back to client.
    res.redirect('/?t='+token);
  })(req, res, next);
});

module.exports = router;
