var express = require('express');
var router = express.Router();
var mysql = require('../utils/mysqlService');

router.get('/',async function(req,res,next){
    console.log(req.query.id);
    let pageData = {
        tabIndex: 3,
        articleItem: await mysql.getArticleItem(req.query.id || '')
    }
    console.log('文章详细：'+ JSON.stringify(pageData));
    res.render('articleDetail', pageData);
});

module.exports = router;