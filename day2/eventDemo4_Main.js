var Calc = require('./eventDemo4_module');

var calc = new Calc();

calc.on('data', (data) => {
    console.log(`Received data: "${data}"`);
});

console.log(calc.add(10,20));
