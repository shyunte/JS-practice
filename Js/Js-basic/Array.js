// Js�� �迭������ ���� type�� �ƴϾ �迭�� ���� �� �ִ�. ���� ��ü �Լ� ���� �����Ͽ� ��� ����
let = ['����', false, {name : 'Hyun', age : 44,}, function(){
    console.log('practice');
}
];

let days =['��','ȭ','��'];
    days.push('��');     // push()�� �迭 �������� index�� �߰��Ѵ� .
    days.pop();         // pop()�� �迭 �������� index�� �����Ѵ�.


    days.unshift('��');  // unshift()�� �迭 �� �տ� index�� �߰��Ѵ�.
    days.shift();        // shift()�� �迭 �� �տ� index�� �����Ѵ�.

    //for - of�� �迭�� index �����ϱ�

    let day = ['MON','TUE','WED']
    day.push('THU');
    day.unshift("SUN");

    for(let x of day){                  // x�� ���Ǵ�� �������� �����ص� �ȴ�.
        console.log(x);
    }