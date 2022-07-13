
var http = require("http")
var server = http.createServer(function(req, res){

    if(req.url=="/home"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>Home</h1>")
        res.end()
    }else if(req.url == "/about"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>about</h1>")
        res.end()
    }else if(req.url=="/contact"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>contant</h1>")
        res.end()
    }else{
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>not found</h1>")
        res.end()
    }
});
server.listen(5050);
console.log("Server run Success")