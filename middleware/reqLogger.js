const R = require('ramda');

function reqLogger(req, res, next) {
  if (!R.isEmpty(req.body)) {
    console.log('Req has body:', req.body);
  }

  if (!R.isEmpty(req.params)) {
    console.log('Req has params:', req.params);
  }
  next();
}

module.exports = reqLogger;
