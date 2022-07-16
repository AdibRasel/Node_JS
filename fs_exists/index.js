const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){

    fs.exists("index.html", function(data){

        if(data){
            res.writeHead(200, {"content-type":"text/html"});
            res.write("Your File is exists");
            res.end()
        }else{
            res.writeHead(200, {"content-type":"text/html"});
            res.write("Your File is not exists");
            res.end()
        }
    });


}).listen(3535);
console.log("your Server is runing")