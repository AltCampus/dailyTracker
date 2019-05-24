var jwt = require('jsonwebtoken');
var config = require('./config');

module.exports = {
  signToken: function (payload) {
    var token = jwt.sign(payload, config.jwtSecret);
    return token;
  },

  verifyToken: function (req, res, next) {
    var token = req.headers.Authorization || req.headers.authorization || '';

    if(!token) {
      return res.status(401).send({ message: 'Please authenticate. '});
    }

    jwt.verify(token, config.jwtSecret, function (err, decoded) {
      if(decoded && decoded._id) {
        req.user = decoded;
        next();
      }
    })
  }
}