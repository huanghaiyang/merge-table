var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '设计器首页' });
});

/* GET main page. */
router.get('/main', function(req, res, next) {
  res.render('main', { title: '主体操作区' });
});


module.exports = router;
