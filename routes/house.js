var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('house', { title: 'Search Results for house' });
  
});

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('house', { title: 'Search Results house' });

});

var express = require('express');

const house_controllers= require('../controllers/house');

var router = express.Router();

/* GET detail house page */
router.get('/detail', house_controllers.house_view_one_Page);
/* GET create house page */
router.get('/create', house_controllers.house_create_Page);
/* GET create update page */
router.get('/update', house_controllers.house_update_Page);
/* GET delete house page */
router.get('/delete', house_controllers.house_delete_Page);
module.exports = router;
