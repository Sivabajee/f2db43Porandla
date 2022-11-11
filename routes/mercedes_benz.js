var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercedes_benz', { title: 'Search Results mercedes_benz' });
});
var express = require('express');
const mercedes_benz_controlers= require('../controllers/mercedes_benz');
var router = express.Router();
/* GET costumes */
router.get('/', mercedes_benz_controlers.mercedes_benz_view_all_Page );
// GET request for one costume. 
router.get('/mercedes_benz/:id', mercedes_benz_controlers.mercedes_benz_detail); 
module.exports = router;