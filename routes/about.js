var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    let pageData = {

    }
    res.render('about', pageData);
});

module.exports = router;