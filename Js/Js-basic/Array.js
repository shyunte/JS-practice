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

    for(let x of day){
        console.log(x);
    }