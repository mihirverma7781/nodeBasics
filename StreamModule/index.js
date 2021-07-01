const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt","utf-8",(err,data)=>{
    //     res.end(data.toString())
    // })


    const rstream = fs.createReadStream("input.txt");


    // type-----2
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // })

    // type--------3
    rstream.pipe(res);
    // it connects readale and writable streams

});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to port 8000");
})