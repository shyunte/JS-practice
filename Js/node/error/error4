'use strict';

//프로미스를 쓰면 catch를 안 붙여줘도 에러는 안나고 경고메시지가 나온다 (unhandledpromiseError)
//node 버젼이 올라가면 프로미스에 catch를 안붙이면 프로세스가 종료될 수 있다고함. 
//웬만하면 promise catch사용하자

const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abcdef')
},1000);


// 프로세스 종료하기
// lost -i tcp:port
// kill -9 process id     프로세스 아이디 찾는법 process.pid