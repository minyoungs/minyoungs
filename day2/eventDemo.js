// process는 이미 EventEmitter 객체를 상속받고 있다.
process.on('exit', function() {
    console.log('exit 이벤트 발생');
});

setTimeout(function(){
    console.log('2초 후에 시스템 종료 시도함');
    // emit()를 내부적으로 호출한 상태!
    process.exit();
}, 2000);

/*
C:\nodejs\workspace\day2
*/
