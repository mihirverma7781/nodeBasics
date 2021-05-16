const fs = require('fs');

const bioData={
    name:"mihir verma",
    age:20,
    portfolio:"https://mihirv.netlify.app"
}


// const jsonData = JSON.stringify(bioData)
// console.log(jsonData)

// const parsedJson = JSON.parse(jsonData)
// console.log(parsedJson)

// 1
const jsonData = JSON.stringify(bioData)

// 2
// fs.writeFile("./json1.json",jsonData,(err)=>{
// console.log("done")
// })

//3
fs.readFile("./json1.json","utf-8",(err,data)=>{
console.log(data)
const originData = JSON.parse(data)
console.log(originData)
})