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
{
 console.log("--------------------------------------------------------");
 console.log("|                       splice                          |");
 console.log("--------------------------------------------------------");

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,];
    
    arr.splice(3,4);    //index ���� 3~4�� �����.
    console.log(arr);

    arr.splice(5,9,100,200);   //index ���� 5~9��°�� �����ϰ� 100,200�� �߰��Ѵ�.
    console.log(arr);
}

{
  console.log("--------------------------------------------------------");
  console.log("|                       concat                          |");
  console.log("--------------------------------------------------------");
  // //�� �迭�� ���ļ� ���ο� �迭�� ���
  let arr = [1, 2];

  console.log(arr.concat([3, 4]));
}

{

    console.log("--------------------------------------------------------");
    console.log("|                       includes                         |");
    console.log("--------------------------------------------------------");

//�迭 ���θ� �� �ʿ� ���� �ش�Ǵ� �ε����� �ִ��� �˾ƺ��� ���

    let arr = [1,2,3];

    console.log(arr.includes(3));    //true
    console.log(arr.includes(8));    //false
}

{
    console.log("--------------------------------------------------------");
    console.log("|                       find(fn)                       |");
    console.log("--------------------------------------------------------");

    // find�� function�� ����Ͽ� ���� Ȯ���ϰ� �ε������� ã�����Ҷ� ���ȴ�.

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

  // filter�� find�� ��� ����� ����, �����ϴ� ��� ��Ҹ� �迭�� ��ȯ�Ѵ�.

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
  
  // �Լ��� �޾� Ư������� �����ϰ� ���ο� �迭�� ��ȯ

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

  //�迭�� ���� ���ڿ��� ��ȯ

  let arr = [ "�ȴ�","����", "�����̾�"];
  let result = arr.join(" ");

  console.log(result);

  
}

{
  console.log("--------------------------------------------------------");
  console.log("|                         split                         |");
  console.log("--------------------------------------------------------");  

  //���ڿ��� ������ �迭�� ����� ��  split("") �ȿ� ���� �������� ������ �迭�� �������

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
        //array���� �����Ҷ�,  typeof�� ������ �ȵɴ� �����

        let user ={
            name : "shyun",
            age  :  13,
        };

    let userList =['shyun', "yoon", "Tom"];

    console.log(typeof user);
    console.log(typeof userList);    //�̰͵� object�γ���
    console.log(Array.isArray(user));
    console.log(Array.isArray(userList));    
}