// 외부 모듈 사용하기 npm install 모듈이름
var nconf = require('nconf');
nconf.env();
console.log('Java_Home 환경변수값 : %s', nconf.get('JAVA_HOME'));
