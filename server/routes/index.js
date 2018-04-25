var express = require('express');
var router = express.Router();
const items = require('./items')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/items', items)

module.exports = router;
