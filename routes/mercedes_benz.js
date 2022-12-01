var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercedes_benz', { title: 'Search Results mercedes_benz' });
});
var express = require('express');
const mercedes_benz_controlers= require('../controllers/mercedes_benz');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET mercedes_benzs */
router.get('/', mercedes_benz_controlers.mercedes_benz_view_all_Page );
// GET request for one mercedes_benz. 
router.get('/mercedes_benz/:id', mercedes_benz_controlers.mercedes_benz_detail); 
/* GET detail mercedes_benz page */ 
router.get('/detail',secured, mercedes_benz_controlers.mercedes_benz_view_one_Page); 
/* GET create mercedes_benz page */ 
router.get('/create',secured, mercedes_benz_controlers.mercedes_benz_create_Page); 
/* GET create update page */ 
router.get('/update',secured , mercedes_benz_controlers.mercedes_benz_update_Page); 
/* GET delete mercedes_benz page */ 
router.get('/delete',secured, mercedes_benz_controlers.mercedes_benz_delete_Page);
module.exports = router;
