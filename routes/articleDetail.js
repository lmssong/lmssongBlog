var express = require('express');
var router = express.Router();
var mysql = require('../utils/mysqlService');

router.get('/',async function(req,res,next){
    console.log(req.query.id);
    let pageData = {
        title: '个人文章-文章详细',
        titleDiscription: 'lmssong\'s Blog，一个专注于.Net/NodeJs开发的技术博客',
        tabIndex: 3,
        articleItem: await mysql.getArticleItem(req.query.id || '43480.5469415046')
    }
    res.render('articleDetail', pageData);
});

module.exports = router;