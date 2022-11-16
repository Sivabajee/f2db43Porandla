var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var merecedes_benz_controller = require('../controllers/mercedes_benz');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/mercedes_benz', merecedes_benz_controller.mercedes_benz_create_post);
// DELETE request to delete Costume.
router.delete('/mercedes_benz/:id', merecedes_benz_controller.mercedes_benz_delete);
// PUT request to update Costume.
router.put('/mercedes_benz/:id', merecedes_benz_controller.mercedes_benz_update_put);
// GET request for one mercedes_benz.
router.get('/mercedes_benz/:id', merecedes_benz_controller.mercedes_benz_detail);
// GET request for list of all mercedes_benz items.
router.get('/mercedes_benz', merecedes_benz_controller.mercedes_benz_list);
module.exports = router;


