var mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"class_bee"
});

con.connect(function(err){
    if(err){
        console,log("throw");
    }

    console.log("connected");
});

module.exports = connection;