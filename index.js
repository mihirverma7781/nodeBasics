const fs = require("fs");


// creating a new file
// fs.writeFileSync('read.txt',"welcome to first file creation");

// Data will be overriden
// fs.writeFileSync('read.txt',"This is tut for core modules, welcome to first file creation");


// to append content
// fs.appendFileSync('read.txt',` \n hello i am fine thankyou`)

// read file
// const buf_data = fs.readFileSync('read.txt')
// console.log(buf_data)
// {/* <Buffer 54 68 69 73 20 69 73 20 74 75 74 20 66 6f 72 20 63 6f 72 65 20 6d 6f 64 75 6c 65 73 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 66 69 72 73 74 20 66 69 6c ... 36 more bytes> */}
// // this will be the buffer outout 

// // now to convert it into string
// origin_data = buf_data.toString()

// console.log(origin_data)

// to rename a file
fs.renameSync('read.txt','readWrite.txt')
