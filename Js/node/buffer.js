const buffer = Buffer.from('버퍼로 바꿔 보세요.');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('띄엄'),Buffer.from('띄엄 띄엄'),Buffer.from('띄어 쓰기')];
console.log(Buffer.concat(array).toString());


console.log(Buffer.alloc(5));   //아무런 버퍼도 안들어왔지만 5바이트 버퍼를 만듬