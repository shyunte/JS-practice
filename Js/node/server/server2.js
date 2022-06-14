const http = require('http');
const fs =require('fs').promises;

const server = http.createServer( async (req,res) => {  //async 항상 에러처리
    try{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const data = await fs.readFile('./server2.html');
    res.end(data);
    } catch (error){
        console.err(err);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
})
  .listen(8080);
  server.on('listening', ( ) => {
    console.log('8080번 포트에서 서버 대기중 입니다.');
  });

  server.on('error', (err) => {
    console.error(err);
  });