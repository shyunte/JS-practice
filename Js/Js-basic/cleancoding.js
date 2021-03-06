{
  // Tenary operator-bad function

  function hyun(score) {
    let result;
    if (score < 5) {
      result = "π";
    } else if (score > 5) {
      result = "π";
    }
    return result;
  }

  // Ternary operator

  function hyun(score) {
    return score < 5 ? "π" : "π";
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
// default parameters λ nullκ°μ μΈμλͺ»νλ€.  μ¦ undefinedμΌλλ§ μ¬μ© νλκ².

  function printMessage3(text = 'nothing to print') {
      console.log(text);
  }


  printMessage2('Hello');
  printMessage2(undefined);
  printMessage2(null);
}


{
    //spread syntax 

    const hyun = {name : 'π«', type : 'π'};
    const yoon = {size : 'M', nation : 'korea', gender : 'M'} ;

    //Object.assign

    const hyun2 = Object.assign(hyun,yoon);

    //spread syntax
    const hyun3 = {...hyun,...yoon,height : 182};

}



{
  //κ° λ°°μ΄μμ μ§μλ§ λ½μ κ·Έ κ°μ *4λ₯Ό νκ³  κ·Έ κ°λ€μ λͺ¨λ λν΄λΌ!
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

  // function μμ΄ μ¬μ©λ κ°λ₯ λ μ± κΉλν¨
  const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
}

{
  //μ€λ³΅ κ° μ κ±°νκΈ° Array

  const array = ["π", "π", "π", "π", "π", "π"];
  console.log(array);

  console.log([...new Set(array)]);
}