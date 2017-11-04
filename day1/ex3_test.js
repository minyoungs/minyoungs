// 모듈을 불러올 때는 require(모듈명)
//var calc = require('./ex3_module');
var calc = require('./exam2_module');
console.log('add 함수 호출 : %d', calc.add(30,20));
console.log('minus 함수 호출 : %d', calc.minus(30,20));
console.log('multiply 함수 호출 : %d', calc.multiply(30,20));
console.log('division 함수 호출 : %d', calc.division(30,20));
//console.log('모듈로 분리한 후 add 함수 호출 : %d', calc.add(20,30));
//console.log('모듈로 분리한 후 minus 함수 호출 : %d', calc.minus(30,20));
//console.log('모듈로 분리한 후 gob 함수 호출 : %d', calc.gob(20,30));
//console.log('모듈로 분리한 후 nanu 함수 호출 : %d', calc.nanu(60,30));

// 연습문제, 더하기 이외의 빼기, 곱하기, 나누기 모듈을 각각 추가해서 현재파일에서
// 호출한 후 콘솔로 출력해보기

