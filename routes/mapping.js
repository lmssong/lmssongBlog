var express = require('express');
var router = express.Router();
var ejs = require('ejs');

router.get('/',function(req,res,next){
    let pageData = {
        tabIndex: 2
    };
    console.log('知识导图：' + JSON.stringify(pageData));
    res.render('mapping',pageData);
});

module.exports = router;