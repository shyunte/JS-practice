//-----Number.EPSILON------
// a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); //true 반환

//--------------Number.prototype.toExponential
//숫자를 지수 표기법으로 변환하여 문자열로 반환한다.

(77.1234).toExponential(); // 7.71234e+1 반환

//-------------Number.prototype.toString
//숫자를 문자열로 반환한다. 앞 소괄호는 진법을 지정함 생략하면 기본 10진법
(10).toString(); //10
(16).toString(2); //10000
