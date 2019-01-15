
var mysql = require('mysql');
var Promise = require('bluebird');

var conn = mysql.createConnection({
    host : '134.175.127.69',      
    user : 'test',             
    password : 'qwe123',      
    port: '3306',                  
    database: 'layadmin',
});
conn.connect();

var mysqlService = {
    getAllArticles : async function(){
        return new Promise((resolve,reject) => {
            if(conn){
                conn.query('SELECT KID,Title,TitleDescription,Category, LEFT(Content,400) AS Content,Author,ImgUrl,DATE_FORMAT(CreateDate, \'%Y-%m-%d\') AS CreateDate FROM layadmin.`Articles` order by CreateDate desc', function(err, rows, fields) {
                    if (err) reject;
                    console.log(JSON.stringify(rows));
                    resolve(JSON.parse(JSON.stringify(rows)));
                });
            }
        });
    },
    getTop1Article : async function(){
        return new Promise((resolve,reject) => {
            if(conn){
                conn.query('SELECT  KID,Title,TitleDescription,Category,LEFT(Content,200) AS Content,Author,ImgUrl,DATE_FORMAT(CreateDate, \'%Y-%m-%d\') AS CreateDate FROM layadmin.`Articles` order by CreateDate desc limit 0,1', function(err, rows, fields) {
                    if (err) reject;
                    console.log(JSON.stringify(rows));
                    resolve(JSON.parse(JSON.stringify(rows)));
                });
            }
        });
    },
    getNext5Articles : async function(){
        return new Promise((resolve,reject) => {
            if(conn){
                conn.query('SELECT KID,Title,TitleDescription,Category,LEFT(Content,110) AS Content,Author,ImgUrl,DATE_FORMAT(CreateDate, \'%Y-%m-%d\') AS CreateDate FROM layadmin.`Articles` order by CreateDate desc limit 1,6', function(err, rows, fields) {
                    if (err) reject;
                    resolve(JSON.parse(JSON.stringify(rows)));
                });
            }
        });
    },
    getArticleItem : async function(paramId){
        return new Promise((resolve,reject) => {
            if(conn){
                conn.query('SELECT  KID,Title,TitleDescription,Category,Content,Author,ImgUrl,DATE_FORMAT(CreateDate, \'%Y-%m-%d\') AS CreateDate FROM layadmin.`Articles` where KID = ?',paramId, function(err, rows, fields) {
                    if (err) reject;
                    console.log(JSON.parse(JSON.stringify(rows[0])));
                    resolve(JSON.parse(JSON.stringify(rows[0])));
                });
            }
        });
    }
}

module.exports = mysqlService;