const fs = require("fs");
require("http").createServer(function(req, res){
    if(req.url=="/home"){
        fs.readFile("../index.html", function(error, data){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("<h1>File Read Error</h1>");
                res.end();
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end();
            }
        })
    }else if(req.url=="/about"){
        fs.readFile("index.html", function(error, data){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("<h1>File Read Error</h1>");
                res.end();
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end();
            }
        })        
    }else{
        fs.readFile("index.html", function(error, data){
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("<h1>File Read Error</h1>");
                res.end();
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write("<h1>Link Error</h1>");
                res.end();
            }
        })
    }
}).listen(3000)
console.log("Your Server Successfully Running")