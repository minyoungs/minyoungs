var Calc = require('./eventDemo3_module');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함.');
