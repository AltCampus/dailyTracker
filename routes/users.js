var express = require('express');
var router = express.Router();
var authUtils = require('../utils/auth');
var User = require('../models/user');

/* GET user identification. */
router.get('/me', authUtils.verifyToken , function(req, res, next) {
  console.log(req.user, 'check 2')
  User.findById(req.user._id, function (err, user) {
    res.json({ user });
  });
});

module.exports = router;
