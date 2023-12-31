var http = require("http");
var fs = require('fs');

http.createServer(function(req,res){


    // fs.appendFile('myfile.txt',"<br>gurpreet singh<br>",function(err,data){
    //     console.log("file append");
    //     console.log(" ");
    // });


    // fs.writeFile('myfile.txt',"<br>new content<br>",function(err,data){
    //     console.log("hello ji kjhskdjbvzskdjxbvlzvhjbszlkjv");

    //     console.log("new data");
    //     console.log(" ");
    // });

    // fs.readFile('myfile.txt',function(err,data){
    //     console.log("read data");
    //     console.log(" ");


        // res.writeHead(200,{'content-type':'text/html'});
        // res.write("<h1>" + "dat kjnij a" + "</h1>");
        // res.end();
    // });

    // fs.unlink('testfile.txt',function(err,data){
    //     console.log("file deleted");
    //     console.log(" ");
    // });

    // res.writeHead(200,{'content-type':'text/html'});
    // res.write("Directory Name" + __dirname + "<br>");
    // res.write("File Name" + __filename);


}).listen(3000);
console.log("server 3000");