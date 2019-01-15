var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {
        title: '项目案例',
        titleDiscription: 'lmssong\'s Blog，一个专注于.Net/NodeJs开发的技术博客',
        tabIndex: 4
    }
    res.render('cases', pageData);
});

module.exports = router;