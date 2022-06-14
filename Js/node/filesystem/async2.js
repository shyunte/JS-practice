const fs = require('fs').promises;

fs.readFile('./read.txt')
  .then((data) => {
    console.log("1번", data.toString());
    return fs.readFile("./read.txt")
  })
  .then((data) => {
    console.log("2번", data.toString());
    return fs.readFile("./read.txt")
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('./read.txt')
})
.then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('./read.txt')
})
.catch((err) =>{
    throw err;
});