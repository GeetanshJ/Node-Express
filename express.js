var exp = require('express');
var app = exp();
var bodyParser = require('body-parser');
var session = require('express-session');
var con = require('./database.js');

app.use(exp.static('BEE'));

app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function (req, res) {
    res.send("<h1>Hello welcome to my site</h1>");
})


app.get('/home', function (req, res) {
    res.sendFile(__dirname + "/home.html");
})

app.get('/homesubmit',function(req,res){
    var email = req.query.email;
    var pass = req.query['pass'];
    console.log(email + " " + pass);
    res.send("form submitted");
});

app.get('/signup', function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post('/signupSubmit',function(req,res){
   var ename =  req.body.empname;
   var add1 =  req.body.add1;
   var add2 =  req.body.add2;
   var dob =  req.body.dob;
   var deptid =  req.body.deptid;
   var sal =  req.body.salary;
   
   res.send("done post");
   
   console.log(ename);
   console.log(add1);
   console.log(add2);
   console.log(dob);
   console.log(deptid);
   console.log(sal);
});


app.get('/emp_reg',function(req,res){
    res.sendFile(__dirname + "/emp_register.html");
});

app.post('emp_msg',function(req,res){
    let {ename,add1,add2,dob,salary,deptid} = req.body;
    let currentDate = new Date();
    let doj = currentDate.getFullYear() + " " + currentDate.getMonth(); + " " + currentDate.getDay();
    let sql = "insert into emp (ename,add1,add2,doj,salary,deptid) values('"+ename+"','"+add1+"','"+add2+"','"+dob+"','"+salary+"','"+deptid+"')";

    con.query(sql,function(err,result){
        if(result.insertId>0){
            req.session.msg = "employee registered";
            res.redirect("http://localhost:8000/emp_msg")
        }
    
        else{
            req.session.msg = "employee not registered";
            res.redirect("http://localhost:8000/emp_msg")
        }
    });
});

app.get('/emp_msg',function(req,res){
    
})


app.listen(8000,function(){console.log("running at 8000")});
