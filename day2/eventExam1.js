let count = 0;
//var cont = 1;

process.on('exit', function(){
        console.log('exit call');
});

process.on('myEvent', function(){
        console.log('myEvent 이벤트 발생 : %s', count);
        count++;
});

var inst = setInterval(function(){
    console.log('2초 후에 이벤트 발생함');
    if(count >5) {
        clearInterval(inst);
        process.exit();
    }
        process.emit('myEvent',count);
}, 2000);
