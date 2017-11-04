// ex1_console_time.js
// 로깅에서 프로그램이 실행된 시간을 로그로 출력
var result = 0;
console.time('mytime');
var iter = setInterval(function(){
    result += 1;
    if(result > 10) {
        clearInterval(iter);
    console.timeEnd('mytime');
    }
    console.log('결과 :' + result);
},1000);
