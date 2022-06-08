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



