const fs = require('fs').promises;

async function main(){
    let data = await fs.readFile('./read.txt')
    console.log('1번',data.toString());
    data = await fs.readFile('./read.txt')
    console.log('2', data.toString());
    data = await fs.readFile("./read.txt")
    console.log("3", data.toString());
    data = await fs.readFile("./read.txt")
    console.log("4", data.toString());
}
main();