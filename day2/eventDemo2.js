process.on('myEvent', function(count){
    console.log('myEvent 이벤트 발생 : %s', count);
});

setTimeout(function(){
    console.log('2초 후에 시스템 종료 시도함');
    // emit()를 내부적으로 호출한 상태!
    process.emit('myEvent','2');
}, 2000);
