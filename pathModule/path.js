const path = require('path');

// console.log(path.dirname("D:/programming/nodejs/pathModule/path.js"))
// console.log(path.extname("D:/programming/nodejs/pathModule/path.js"))
// console.log(path.basename("D:/programming/nodejs/pathModule/path.js"))

//returns an object with all elements of path
const myPath = path.parse("D:/programming/nodejs/pathModule/path.js")

console.log(`${myPath.ext}`)



