'user strict';

//복구 작업용으르논 비추천
// 에러 내용을 기록하는데 사용하기 좋음

process.on('uncaughtException', (err) =>{
    console.log('예기치 못한 에러' , err);
});

setInterval(() =>{
    throw new Error('서버를 고장내주마');
},1000);

setTimeout(() =>{
    console.log('실행됩니다');
},2000);