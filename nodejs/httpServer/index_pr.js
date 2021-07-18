const http = require('http')


const server = http.createServer((req, res)=>{
res.end("this is the response");
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no. 8000")
})