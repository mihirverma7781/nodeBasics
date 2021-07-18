const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8",)
    const strObj= JSON.parse(data)

    if(req.url=="/"){
        res.end("welcome to create server in node js")
    }
    else if(req.url=="/about"){
        res.end("we are on about page")
    }
    else if(req.url=="/contact"){
        res.write("we are on contact us page")
        res.end()
    }
    else if(req.url=="/userapi"){
        res.writeHead(200, {
            'Content-Type': 'application/json'
          })
       res.end(strObj[2].name)       
    }
    else{
        //to define the content type of a response
        res.writeHead(404, {
            'Content-Type': 'text/html'
          })
        res.end("<h1>404 page does not exist<h1/>")
    }
    
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000")
})