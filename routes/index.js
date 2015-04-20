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

/* GET home page. */
router.get('/templates/:name', function(req, res, next) {
	var name = req.params.name;
	if (name === "generateTable") {
		res.render('templates/generateTable', {
			title: '生成表格模板',
			rnumber: req.rnumber,
			cnumber: req.cnumber
		});
	}
});


module.exports = router;
