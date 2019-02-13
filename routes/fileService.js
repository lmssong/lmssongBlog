var express = require('express');
var router = express.Router();
var fs  = require('fs');
const AdmZip = require('adm-zip'); //引入查看zip文件的包

router.get('/',function(req,res,next){
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    var filePath = "E:/study/workingReport/2018年度lims团队工作总结报告 - 副本.docx";
    // fs.readFile(filePath, "utf8",function(err,data){
    //     if(err)
    //         console.log(err)
    //     else{
    //         res.write(data);
    //         res.end();
    //     }
    // });

    const fs = require("fs");
    
    const zip = new AdmZip(filePath); //filePath为文件路径
    let contentXml = zip.readAsText("word/document.xml");//将document.xml读取为text内容；
    let str = "";
    contentXml .match(/<w:t>[\s\S]*?<\/w:t>/ig).forEach((item)=>{
    str += item.slice(5,-6)});
    res.end(str);

    // fs.writeFile("./2.txt",str,(err)=>{//将./2.txt替换为你要输出的文件路径
    //     if(err)throw err;
    // });
})

module.exports = router;