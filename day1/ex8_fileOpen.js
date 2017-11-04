// ex8_fileOpen.js
// open(path, flags, [mode], [callback]) : 파일을 연다.
// read(fd, buffer, offset, length, position, [callback]) : 지정한 부분의 파일 내용을 읽어 들인다.
// write(fd, buffer, offset, length, position, [callback]) : 파일의 지정한 부분에 데이터를 쓴다.
// close(fd, [callback])

var fs = require('fs');

// 파일에 데이터 쓰기 위해서 open을 w,a+모드로 작성한다.
fs.open('./test.txt', 'a+', function(err, fd){
    if(err) throw err;
    var buf = new Buffer('하이!\n');
    console.log("Buffer.Length : " + buf.length);
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
        if(err) throw err;
            console.log("뭐지????");
            console.log(err, written, buffer);
            console.log("buffer : ", buffer);
            console.log("err : ", err);
            console.log("written : ", written);
        fs.close(fd, function(){
            console.log('closed');
        });
    });
});
