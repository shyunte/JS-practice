'use strict';

{
for( let i =0; i<10; i++ ){
    if(i%2==0){
        console.log(`짝수는 = ${i}`);
    }
}


for (let i = 0; i < 10; i++) {
      console.log(i);

  if (i == 8) {
    break;
    }
}

}

{
    function Person(name, age){
        this.name = name;
        this.age = age;
    }
    const hyun = new Person('shyun',30);
    console.log(hyun);

}

{   //각 배열에서 짝수만 뽑아 그 값에 *4를 하고 그 값들을 모두 더해라!
    const item = [1,2,3,4,5,6,7,8,8,9,10];
    function getAll(items){
        return items.filter((num) => num %2 ===0);
    }
    function multiple(items){
        return items.map((num)=> num * 4 );
    }
    function sumArray(items){
        items.reduce((a,b) => a + b,0);
    }
    
    // function 없이 사용도 가능 더 욱 깔끔함
    const result = items
    .filter((num) => num %2 ===0)
    .map((num) => num * 4)
    .reduce((a,b) => a + b,0);
  
}

{
//중복 값 제거하기 Array

const array = ['🍐','🍌','🍇','🍒','🍐','🍏'];
console.log(array);

console.log([...new Set(array)]);
}