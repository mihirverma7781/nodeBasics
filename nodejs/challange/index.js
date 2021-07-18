const fs = require('fs')

// challange

// 1: create a folder
// 2: create a file
// 3: add data to it append also
// 4: read data without getting buffer
// 5: rename the file
//now delete both the file and folder

// fs.mkdirSync('Thapa')
// fs.writeFileSync("./Thapa/cha.txt","This is my first challange")
// fs.appendFileSync("challange1.txt","\n \n this is new line added")
// const originalString = fs.readFileSync("challange1.txt","ascii")
// console.log(originalString)

// fs.renameSync("challange1.txt","deletethis.txt")

fs.rmdirSync("Thapa")
