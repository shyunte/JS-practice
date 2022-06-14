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
 