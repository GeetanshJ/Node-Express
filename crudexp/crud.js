var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./db.js');


app.use(session({secret:"123!@#"}));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render('home')
});

app.get("/listemp",function(req,res){
    db.query("select * from emp",function(err,result){
        if(err) throw err;
        else{res.render('listemp',{result:result})}
    });
    // res.render('listemp',{data:"hello msg passed to listemp.js"});
});

app.listen(8000,function(){console.log("at 8000")});