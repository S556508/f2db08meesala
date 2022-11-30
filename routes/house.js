var express = require('express');
var router = express.Router();

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}

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
router.get('/', house_controllers.house_view_all_Page ); 

/* GET detail house page */
router.get('/detail', house_controllers.house_view_one_Page);
/* GET create house page */
router.get('/create',secured, house_controllers.house_create_Page);
/* GET create update page */
router.get('/update',secured, house_controllers.house_update_Page);
/* GET delete house page */
router.get('/delete',secured, house_controllers.house_delete_Page);
module.exports = router;
