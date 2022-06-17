const fs = require("fs");
console.log("before:", process.memoryUsage().rss); //rss로 메모리를 체크함

const data1 = fs.readFileSync("./big.txt");
fs.writeFileSync("./big.txt", data1);
console.log("buffer", process.memoryUsage().rss); //
