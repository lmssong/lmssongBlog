var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {
        tabIndex: 4
    }
    console.log('项目案例：'+ JSON.stringify(pageData));
    res.render('cases', pageData);
});

module.exports = router;