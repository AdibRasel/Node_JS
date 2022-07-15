// const http = require("http");
// const fs = require("fs");

// http.createServer(function(req, res){
//     if(req.url=="/home"){
//         fs.readFile("index.html",function(error, data){

//             res.writeHead(200,{"content-type":"text/html"});
//             res.write(data);
//             res.end();

//         })
//     }else if(req.url=="/about"){
//         fs.readFile("../index.html",function(error, data){

//             res.writeHead(200,{"content-type":"text/html"});
//             res.write(data);
//             res.end();
            
//         })
//     }else{
//         fs.readFile("error.html", function(error, data){
//             res.writeHead(200,{"content-type":"text/html"});
//             res.write(data);
//             res.end();
//         })
//     }
// }).listen(3000);

// console.log("My Server Running ")


const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    
    // Asynchronous fs 
    fs.readFile("index.html", function(error, data){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(data)
        res.end()
    })

    // Synchronous fs 
    const mySynce_read_file = fs.readFileSync("index.html")
    res.writeHead(200, {"content-type":"text/html"});
    res.write(mySynce_read_file)
    res.end()


}).listen(3030)
console.log("My Server Running ")

