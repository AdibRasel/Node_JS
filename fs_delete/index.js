const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){

            const result = fs.unlinkSync("test.html")
                if(result){
                    res.writeHead(200, {"content-type":"text/html"});
                    res.write("Frile delete Faild");
                    res.end()
                }else{
                    res.writeHead(200, {"content-type":"text/html"})
                    res.write("File delete Successfully");
                    res.end()
                }

}).listen(2020)
console.log("your server is running")