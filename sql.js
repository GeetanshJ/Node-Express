const connection = require("./database.js");

let sql = "select max(salary) from emp";
connection.query(sql,function(err,result,fields){
    console.log(result);
});