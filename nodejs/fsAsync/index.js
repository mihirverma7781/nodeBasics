const fs = require("fs")

// fs.writeFile("read.txt","today is awesome day",
// (err)=>{
//     console.log("file created")
// });

// fs.appendFile('read.txt',"\n\ntask completed",
// (err)=>{
//     console.log("task completed")
// })


fs.readFile("read.txt","utf-8",
(err,res)=>{
    console.log(res)
})