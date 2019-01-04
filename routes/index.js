var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let pageData = {
    title: 'lmssong\'s Blog',
    titleDiscription: '一个专注于.Net/NodeJs开发的技术博客'
  }
  res.render('index', pageData);
});

module.exports = router;
