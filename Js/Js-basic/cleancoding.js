{
  // Tenary operator-bad function

  function hyun(score) {
    let result;
    if (score < 5) {
      result = "🍋";
    } else if (score > 5) {
      result = "🍇";
    }
    return result;
  }

  // Ternary operator

  function hyun(score) {
    return score < 5 ? "🍋" : "🍇";
  }
}

{
  //coalescing function -bad function

  function printMessage(text) {
    let message = text;
    if (text === null && text === undefined) {
      message = "nothing to print";
    }
    console.log(message);
  }

  //coalescing

  function printMessage2(text){
      const message = text ?? 'nothing to print';
      console.log(message);
  }
// default parameters 는 null값을 인식못한다.  즉 undefined일때만 사용 하는것.

  function printMessage3(text = 'nothing to print') {
      console.log(text);
  }


  printMessage2('Hello');
  printMessage2(undefined);
  printMessage2(null);
}


{
    //spread syntax 

    const hyun = {name : '🫒', type : '🍆'};
    const yoon = {size : 'M', nation : 'korea', gender : 'M'} ;

    //Object.assign

    const hyun2 = Object.assign(hyun,yoon);

    //spread syntax
    const hyun3 = {...hyun,...yoon,height : 182};

}



{
  //각 배열에서 짝수만 뽑아 그 값에 *4를 하고 그 값들을 모두 더해라!
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
  function getAll(items) {
    return items.filter((num) => num % 2 === 0);
  }
  function multiple(items) {
    return items.map((num) => num * 4);
  }
  function sumArray(items) {
    items.reduce((a, b) => a + b, 0);
  }

  // function 없이 사용도 가능 더 욱 깔끔함
  const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
}

{
  //중복 값 제거하기 Array

  const array = ["🍐", "🍌", "🍇", "🍒", "🍐", "🍏"];
  console.log(array);

  console.log([...new Set(array)]);
}