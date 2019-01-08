var express = require('express');
var router = express.Router();
var ejs = require('ejs');

router.get('/',function(req,res,next){
    let pageData = {
        title: 'lmssong\'s Blog',
        titleDiscription: '一个专注于.Net/NodeJs开发的技术博客',
        pageTitle: '知识导图'
    }
    // let html = '<h1>这是知识导图</h1>'
    // ejs.render(html,pageData);
    res.render('mapping',pageData);
});

module.exports = router;