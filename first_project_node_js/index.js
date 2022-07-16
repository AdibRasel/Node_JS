// var submit = document.getElementById("submit");

// submit.addEventListener("click", function(){
    




// })

const http = require("http");
const fs = require("fs")

http.createServer(function(req, res){

    // only read file 
    // fs.readFile("index.html", function(error, data){
    //     res.writeHead(200,{"content-type":"text/html"});
    //     res.write(data);
    //     res.end()
    // })
    // end only read file 
    if(req.url=="/home"){
            fs.readFile("index.html", function(error, data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end()
            })
            
        }else if(req.url=="/add_file"){
        fs.writeFile("file_name.txt", "Data", function(error){
            // only read file 
            fs.readFile("index.html", function(error, data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end()
            })
            // end only read file 
        })

    }else if(req.url=="/rename"){
        fs.rename("file_name.txt", "newName.txt", function(error){
            // only read file 
            fs.readFile("index.html", function(error, data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end()
            })
            // end only read file 
        })

    }else if(req.url=="/exists"){
        fs.exists("newName.txt", function(data){
            if(data){
                // only read file 
            fs.readFile("index.html", function(error, data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end()
            })
            // end only read file 
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write("File not exists");
                res.end()
            }
        })

    }else if(req.url=="/delete"){
        fs.unlink("newName.txt", function(data){
            if(data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("File not Not Delete");
                res.end()
            }else{
             // only read file 
            fs.readFile("index.html", function(error, data){
                res.writeHead(200,{"content-type":"text/html"});
                res.write(data);
                res.end()
            })
            // end only read file 
            }
        })

    }else{
        // only read file 
        fs.readFile("error.html", function(error, data){
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end()
        })
        // end only read file 
    }

}).listen(4040)
console.log("Your Server is running")