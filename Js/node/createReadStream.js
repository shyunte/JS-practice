const fs = require('fs');
//createReadStream은 처음에 64키로바이틑 읽어옴, 근데 총 163바이트니깐 저런식으로 쪼개서 안나옴
//highWaterMark를 사용해서 16바이트씩 끊어서 입력받아옴
//이런식으로 스트림은 끊어서 받아오고 버퍼는 한번에 받아옴
//스트림 방식으 메모리를 아낄수 있다. 내 웹이 총 100메가라도 10메가씩 끊어서 받아오면 계속 받아올 수 있음.
const readStream = fs.createReadStream('./readme.txt', {highWaterMark : 16});   

const data =[];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
});
readStream.on('error',(err) => {
    console.log('error', err)
})