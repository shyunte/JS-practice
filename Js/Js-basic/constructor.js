//생성자 함수는 대부분 첫글자를 대문자로 생성해 준다.
function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
    this.sayAge = function(){
        console.log(`제 나이는${age}입니다.`);
    }
}

let user1 = new User('shyun', 50 );
let user2 = new User('jane', 40 );
let user3 = new User('mike', 30 );
let user5 = new User('shin', 30 );

user5.sayName();
user1.sayAge();

console.log(user1,user2,user3,user5);