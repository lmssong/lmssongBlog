var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {
        tabIndex: 5
    }
    res.render('about', pageData);
});

module.exports = router;