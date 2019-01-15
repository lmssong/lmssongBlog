var express = require('express');
var router = express.Router();
var mysql = require('../utils/mysqlService');

router.get('/', async function(req,res,next){
    let pageData = {
        title: '个人文章',
        titleDiscription: 'lmssong\'s Blog，一个专注于.Net/NodeJs开发的技术博客',
        tabIndex: 3,
        allArticles: await mysql.getAllArticles()
    }
    console.log('xxxxx' + pageData.allArticles)
    res.render('article', pageData);
});

module.exports = router;