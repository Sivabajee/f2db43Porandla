var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercedes_benz', { title: 'Search Results mercedes_benz' });
});
var express = require('express');
const mercedes_benz_controlers= require('../controllers/mercedes_benz');
var router = express.Router();
/* GET mercedes_benzs */
router.get('/', mercedes_benz_controlers.mercedes_benz_view_all_Page );
// GET request for one mercedes_benz. 
router.get('/mercedes_benz/:id', mercedes_benz_controlers.mercedes_benz_detail); 
/* GET detail mercedes_benz page */ 
router.get('/detail', mercedes_benz_controlers.mercedes_benz_view_one_Page); 
/* GET create mercedes_benz page */ 
router.get('/create', mercedes_benz_controlers.mercedes_benz_create_Page); 
module.exports = router;