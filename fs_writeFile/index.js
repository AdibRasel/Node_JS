

// const http = require("http");
// const fs = require("fs");

// http.createServer(function(req, res){
//     if(req.url=="/"){

//         fs.writeFile("new_file_name.text", "ফাইলের মধ্যে এই ডাটা গুলো থাকবে", function(error){
//             res.writeHead(200,{"content-type":"text/thml"});
//             res.write("File Create Successfuly");
//             res.end()
//         })

//     }
// }).listen(2020);
// console.log("file create successfully")






// Synchronous
const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    if(req.url=="/"){

        const fs_file_write = fs.writeFileSync("new_file_name.text", "ফাইলের মধ্যে এই ডাটা গুলো থাকবে")
        if(fs_file_write){
            res.writeHead(200,{"content-type":"text/thml"});
            res.write("Failde");
            res.end()
        }else{
            res.writeHead(200,{"content-type":"text/thml"});
            res.write("File Create Successfuly");
            res.end()
        }

    }
}).listen(2020);
console.log("file create successfully")