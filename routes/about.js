var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {
        title: 'lmssong\'s Blog',
        titleDiscription: '一个专注于.Net/NodeJs开发的技术博客',
        pageTitle: '关于我'
    }
    res.render('about', pageData);
});

module.exports = router;