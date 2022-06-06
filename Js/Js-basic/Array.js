// Js의 배열에서는 같은 type이 아니어도 배열을 넣을 수 있다. 숫자 객체 함수 등을 포함하여 사용 가능
let = ['현태', false, {name : 'Hyun', age : 44,}, function(){
    console.log('practice');
}
];

let days =['월','화','수'];
    days.push('목');     // push()는 배열 마지막에 index를 추가한다 .
    days.pop();         // pop()은 배열 마지막의 index를 삭제한다.


    days.unshift('일');  // unshift()는 배열 맨 앞에 index를 추가한다.
    days.shift();        // shift()는 배열 맨 앞에 index를 삭제한다.

    //for - of로 배열에 index 나열하기

    let day = ['MON','TUE','WED']
    day.push('THU');
    day.unshift("SUN");

    for(let x of day){                  // x는 임의대로 변수명을 기입해도 된다.
        console.log(x);
    }
{
 console.log("--------------------------------------------------------");
 console.log("|                       splice                          |");
 console.log("--------------------------------------------------------");

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,];
    
    arr.splice(3,4);    //index 순차 3~4를 지운다.
    console.log(arr);

    arr.splice(5,9,100,200);   //index 순차 5~9번째를 삭제하고 100,200을 추가한다.
    console.log(arr);
}

{
  console.log("--------------------------------------------------------");
  console.log("|                       concat                          |");
  console.log("--------------------------------------------------------");
  // //두 배열을 합쳐서 새로운 배열로 출력
  let arr = [1, 2];

  console.log(arr.concat([3, 4]));
}

{

    console.log("--------------------------------------------------------");
    console.log("|                       includes                         |");
    console.log("--------------------------------------------------------");

//배열 전부를 볼 필요 없이 해당되는 인덱스가 있는지 알아볼때 사용

    let arr = [1,2,3];

    console.log(arr.includes(3));    //true
    console.log(arr.includes(8));    //false
}

{
    console.log("--------------------------------------------------------");
    console.log("|                       find(fn)                       |");
    console.log("--------------------------------------------------------");

    // find는 function을 사용하여 좀더 확실하게 인덱스값을 찾으려할때 사용된다.

    let arr = [
        {name : "shyun", age : 40},
        {name : "yoon",  age : 15},
        {name : "gwang", age : 34},
    ];

    const result = arr.find((user)=> {
        if(user.age < 19){
            return true;
        }
        return false;
    });

    console.log(result);
}

{
console.log("--------------------------------------------------------");
console.log("|                       filter(fn)                      |");
console.log("--------------------------------------------------------");

  // filter는 find와 사용 방법은 같다, 만족하는 모든 요소를 배열로 반환한다.

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const result = arr.filter((num) => {
        return num%2 ===0;
});

console.log(result);
}


{
console.log("--------------------------------------------------------");
console.log("|                       map(fn)                         |");
console.log("--------------------------------------------------------");

  // 함수를 받아 특정기능을 시행하고 새로운 배열로 반환

let user = [
    { name: "shyun", age: 40 },
    { name: "yoon", age: 15 },
    { name: "gwang", age: 34 },
];

let newUser= user.map((user, index) =>{
    return Object.assign({},user,{
        id : index + 1,
        isAdult : user.age>19,
    });
});

console.log(newUser);



}

{

console.log("--------------------------------------------------------");
console.log("|                         join                        |");
console.log("--------------------------------------------------------");  

  //배열을 합쳐 문자열로 반환

let arr = [ "안뇽","나는", "현뚱이야"];
let result = arr.join(" ");

console.log(result);


}

{
console.log("--------------------------------------------------------");
console.log("|                         split                         |");
console.log("--------------------------------------------------------");  

  //문자열을 나눠서 배열로 만들어 줌  split("") 안에 들어가느 기준으로 놔눠서 배열로 만들어줌

const user = "shyun, yoon,gwang,Tom";
const result = user.split(",");
console.log(result);

let str = "Hello my name is shyun.!";
const result2 = str.split("");
console.log(result2);


}

{
    console.log("--------------------------------------------------------");
    console.log("|                     Array.isArray                     |");
    console.log("--------------------------------------------------------"); 
        //array인지 구분할때,  typeof로 구분이 안될대 사용함

        let user ={
            name : "shyun",
            age  :  13,
        };

    let userList =['shyun', "yoon", "Tom"];

    console.log(typeof user);
    console.log(typeof userList);    //이것도 object로나옴
    console.log(Array.isArray(user));
    console.log(Array.isArray(userList));    
}
