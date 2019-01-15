var express = require('express');
var router = express.Router();
var ejs = require('ejs');

router.get('/',function(req,res,next){
    let pageData = {
        title: '技术拓扑图',
        titleDiscription: 'lmssong\'s Blog，一个专注于.Net/NodeJs开发的技术博客',
        tabIndex: 2
    };
    res.render('mapping',pageData);
});

module.exports = router;