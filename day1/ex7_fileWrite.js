var fs = require('fs');
var data = "hi hello 안녕? ";
fs.writeFile('text.txt', data, 'utf-8', function(error) {
    console.log('text.txt 파일 만들어졌지~ completed');
});

