var express = require('express');
var router = express.Router();
var mysql = require('../utils/mysqlService');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var pageData = {
      tabIndex: 1,
      top1Article: await mysql.getTop1Article(),//Top1 文章数据
      next5Articles: await mysql.getNext5Articles()//Top2-6共5条文章记录数
  }
  console.log('lmssong\'s Blog首页:' + JSON.stringify(pageData));
  res.render('index', pageData);
});

module.exports = router;
