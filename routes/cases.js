var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {
        title: 'lmssong\'s Blog',
        titleDiscription: '一个专注于.Net/NodeJs开发的技术博客',
        pageTitle: '项目案例'
    }
    res.render('cases', pageData);
});

module.exports = router;