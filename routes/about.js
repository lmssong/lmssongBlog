var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {
        title: '关于我',
        titleDiscription: 'lmssong\'s Blog，一个专注于.Net/NodeJs开发的技术博客',
        tabIndex: 5
    }
    res.render('about', pageData);
});

module.exports = router;