'use strict';

//노드는 스레드를 멈춤 스레드가 멈춘다는 것은 프로세스가 멈춘다는것


//가장 쉬운 방법은 try catch로 잡는다
setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버 박살남');
    }catch (err) {
        console.log(err);
    }
}, 1000);