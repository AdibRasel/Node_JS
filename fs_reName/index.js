const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    
    if(req.url=="/createFile"){

        const createFile = fs.writeFileSync("createFile.txt", "any Data")
        if(createFile){
            res.writeHead(200, {"content-type":"text/html"});
            res.write("File Create Successfull")
            res.end();
        }else{
            res.writeHead(200, {"content-type":"text/html"});
            res.write("File Create faild")
            res.end();
        }

    }else if(req.url=="/reName"){

       const fileRename = fs.renameSync("createFile.txt","newName.html")
        if(fileRename){
            res.writeHead(200, {"content-type":"text/html"});
            res.write("File reName Successfull")
            res.end();
        }else{
            res.writeHead(200, {"content-type":"text/html"});
            res.write("File reName feaild")
            res.end();
        }

    }else{
        res.writeHead(200, {"content-type":"text/html"});
        res.write("দয়া করে url এর শেষে /reName দিন, doya kore url er shese /creatFile othobe /reName din");
        res.end();
    }


}).listen(4040);
console.log("Your Server is running");

