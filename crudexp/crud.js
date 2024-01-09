var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./db.js');


app.use(session({secret:"123!@#"}));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("home", { login : "login",hello:"hi please login to continue"});
});


app.get("/login", (req, res) => {
    req.session.msg = "enter details to login";
    res.render('login', { msg: req.session.msg });
});

app.post("/login_submit", (req, res) => {
    var {email, password } = req.body;
    let sql = `SELECT * FROM users WHERE  email=? AND password=?`;

    db.query(sql, [email, password], (err, results) => {

        if (results.length > 0) {
            req.session.user_id = results[0].user_id;
            req.session.username = results[0].username;
            res.render('home',{login:"logout",hello:`welcome mr ${req.session.username }`});
        }
        
        else {
            req.session.msg = "Username and password do not match";
            res.render('login', { msg: req.session.msg });
        }
    });
});


// app.get('/listemp', function(req, res) {
//     db.query('SELECT * FROM emp', function(err, result) {
//         if (err) {
//             console.error('Error querying the database:', err);
//             return;
//         }

//         console.log('Result from the database:', result); // Add this line to log the result

//         res.render('listemp', { result: result });
//     });
// });



// app.get('/addemp',function(req,res){
//     db.query("select * from dept",function(err,result){
//         res.render('addemp',{result:result});
//     })
// });


// app.post('/addemp_submit', function(req, res) {
//     let { ename, add1, add2, dob, salary, deptid } = req.body;
//     let cdate = new Date();
//     let month = cdate.getMonth() + 1;
//     let doj = cdate.getFullYear() + "-" + month + "-" + cdate.getDate();
//     let sql = "INSERT INTO emp (ename, add1, add2, dob, doj, salary, deptid) VALUES ('" + ename + "','" + add1 + "','" + add2 + "','" + dob + "','" + doj + "','" + salary + "','" + deptid + "')";

//     db.query(sql, function(err, result) {
//         if (result.insertId > 0) {
//             res.redirect('/listemp');
//         }
//     });
// });



// app.get('/editemp',function(req,res){
//     let empid = req.query();
//     db.query("select * from emp where empid="+empid,function(err,empdata){
//         db.query("select * from emp data",function(err,deptdata){
//             res.render('editemp',{editemp:editemp,deptdata:deptdata})
//         })
//     })
// })

app.listen(8000,function(){console.log("at 8000")});