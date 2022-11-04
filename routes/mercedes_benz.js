var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercedes_benz', { title: 'Search results mercedes benz' });
});

module.exports = router;
