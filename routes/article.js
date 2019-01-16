var express = require('express');
var router = express.Router();
var mysql = require('../utils/mysqlService');

router.get('/', async function(req,res,next){

    var articleList = await mysql.getAllArticles();//个人文章所有记录数
    var pageCount = 1;//默认分页数
    var pageSize = 10;//每页记录数，当前设置为10

    //计算分页数
    if(articleList.length < pageSize){
        pageCount = 1;
    }else{
        if(articleList.length % pageSize == 0){
            pageCount = articleList.length / pageSize;
        }else{

            pageCount = (articleList.length - articleList.length % pageSize) / pageSize + 1;
        }
    }

    //文章分页数据
    var pagingData = {
        pageIndex: req.query.index || 1,//当前索引，默认1
        pageSize: pageSize,//每页记录数
        totalCount:articleList.length,
        pageCount: pageCount
    }

    //页面Model
    let pageData = {
        tabIndex: 3,
        pageObj:pagingData,
        allArticles: await mysql.getArticlesByPage(pagingData.pageIndex,pagingData.pageSize)
    }
    console.log('个人文章：' + JSON.stringify(pageData))
    res.render('article', pageData);
});

module.exports = router;