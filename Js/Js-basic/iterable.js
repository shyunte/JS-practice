//  사용자 정의 이터러블 피보나치

const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];

        return { value: cur, done: cur >= max };
      },
    };
  },
};

for (const num of fibonacci) {
  console.log(num);
}
// max의 값을 변경할 수 있도록 함수화하기

const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };
};

for (const num of fibonacciFunc(120)) {
  console.log(num);
}
