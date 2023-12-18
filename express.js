var exp = require('express');
var app = exp();
var bodyParser = require('body-parser');
var session = require('express-session');

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
   console.log(add2);7
   console.log(dob);
   console.log(deptid);
   console.log(sal);
});

app.listen(8000,function(){console.log("running at 8000")});
