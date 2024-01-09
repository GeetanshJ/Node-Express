var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");

app.use(session({secret: "123456"}));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    if (req.session.user_id > 0) {
        res.redirect("home");
    } else {
        req.session.msg = "Please log in first to view the home page";
        res.redirect("/login");
    }
});

app.get("/login", (req, res) => {
    res.render("login", { msg: req.session.msg });
});

app.post("/login_submit",function(req,res){
    var {email,password} = req.body;
    let sql = `select * from users where email='"+email+"' and password='"+password+"' `;

    res.render(sql,function(req,res){
        if (req.session.user_id > 0) {
            res.redirect("home");
        }

        else{
            req.session.msg = "username and password does not match";
            res.redirect("/login");
        }
    })
})



const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
