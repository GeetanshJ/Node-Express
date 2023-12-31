var url = require('url');

var adr = "https://localhost:8080/aboutus.html?name=geetansh&email=jaingeetansh&dob=15-01-04";

var url_obj = url.parse(adr,true);

console.log("host: " + url_obj.host);
console.log("hostname: " + url_obj.hostname);
console.log("port: " + url_obj.port);
console.log("search string: " + url_obj.search);


var obj = url_obj.query;
console.log(obj.name);
console.log(obj.email);
console.log(obj.dob);


// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'});


//     if(req.url ==="/index.html" || req.url ==="/"){
//         fs.readFile("index.html",function(err,data){
//             console.log(req.url);
//             console.log("");
//             return res.end(data);
//         });
//     }

//     else if(req.url ==="/contactus.html"){
//         fs.readFile("contactus.html",function(err,data){
//             console.log(req.url);
//             console.log("");
//             return res.end(data);
//         });
//     }

//     else if(req.url ==="/aboutus.html"){
//         fs.readFile("aboutus.html",function(err,data){
//             console.log(req.url);
//             console.log("");
//             return res.end(data);
//         });
//     }

//     else if(req.url ==="/faq.html"){
//         fs.readFile("faq.html",function(err,data){
//             console.log(req.url);
//             console.log("");
//             return res.end(data);
//         });
//     }

//     else{
//         res.end("not found");
//     }


// }).listen(8080);
// console.log("server start");