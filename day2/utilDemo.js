const util = require('util');
let data =util.format('%d, %s, %j', 10.0 , 'abc', {name : 'node.js'});

console.log(data);

// 출력결과
// 10, abc, {"name":"node.js"}

/*
%s - 문자열.
%d - 숫자 (integer 와 float를 모두 지원한다.).
%j - JSON.
% - 퍼센트기호 ('%'). 이 기호는 플레이스홀더 아규먼트를 사용하지 않는다.
*/
