var fs = require('fs');
var text = fs.readFileSync('text.txt', 'utf-8');
console.log(text);
console.log("---------------");

// readFileSync(file, encoding), readFile(file, encoding, callback)
// writeFileSync(file, data, encoding), writeFile(file, data, encoding, callback)
// ex7_fileWrite.js 제작해보기

fs.readFile('text.txt', 'utf-8', function(error, data) {
    console.log(data);
});

console.log("출력이 비동기식으로 됩니다.");
