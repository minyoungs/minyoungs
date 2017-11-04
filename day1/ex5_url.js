var url = require('url');
var queryString = require('querystring');
// stringigy -> queryObject를 문자열로 변환해서 리턴
// parse -> 쿼리 문자열을 쿼리 객체로 변환
var parsedObj = url.parse('http://edu.kosta.or.kr/myBoard/board_findBoard?board.boardId=1342');
console.log(parsedObj);
console.log("test1 : " + parsedObj.query);
console.log("objectType :%s ", typeof(parsedObj));
console.log("StringType :%s ", typeof(url.format(parsedObj)));
console.log('--------------------------------------');
console.log(url.resolve('/one/two/three/', 'four'));         // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one'));    // 'http://example.com/one'
console.log(url.resolve('http://example.com/one/', 'two')); // 'http://example.com/two'
console.log('--------------------------------------');
console.log(queryString.parse(parsedObj.query));    // json으로 추출받기
console.log('--------------------------------------');
var param = queryString.parse(parsedObj.query);
console.log(queryString.stringify(param));  //요청 파라미터 객체를 문자열로 변환하기 ★★★★★
