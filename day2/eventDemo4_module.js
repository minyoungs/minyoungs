var EventEmitter = require('events');

module.exports = class Calc extends EventEmitter {
    add(a,b) {
        this.emit('data','5');
        return a+b;
    }
}
