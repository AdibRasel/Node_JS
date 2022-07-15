// const http = require("http");

// http.createServer(function(req, res){

//     if(req.url=="/home"){
//         res.write("<h1>Home page</h1>")
//         res.end()
//     }else if(req.url=="/about"){
//         res.write("<h1>About Page</h1>")
//         res.end()
//     }else{
//         res.write("<h1>Not Found your request Url</h1>")
//         res.end()
//     }


// }).listen(3000);
// console.log("Your Server is Running")


const http = require("http");

const url = require("url");

http.createServer(function(req, res){

const myUrl = "https://adibrasel.github.io/Noda_JS/index.html";

const myobjUrl = url.parse(myUrl, true)

const myHostName = myobjUrl.host;
const myPathName = myobjUrl.path;
const myseachName = myobjUrl.search;
const test = myobjUrl.protocol;
const test1 = myobjUrl.href;

res.writeHead(200, {"Content-Type":"text/html"});
res.write(test1);
res.end()

}).listen(3000);
console.log("Your Server is Running")