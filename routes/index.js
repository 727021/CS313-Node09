var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignments', brand: 'CS313', active: ' active' });
});

module.exports = router;
