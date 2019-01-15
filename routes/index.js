var express = require('express');
var router = express.Router();
var mysql = require('../utils/mysqlService');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var pageData = {
      title: 'lmssong\'s Blog',
      titleDiscription: '一个专注于.Net/NodeJs开发的技术博客',
      tabIndex: 1,
      top1Article: await mysql.getTop1Article(),
      next5Articles: await mysql.getNext5Articles()
  }
  // console.log('xxxx:' + pageData.articleList);
  await res.render('index', pageData);
});

module.exports = router;
