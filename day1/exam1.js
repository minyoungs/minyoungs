// person이란 자바스크립트 객체를 생성한 후
// console.log를 사용해서 해당값을 출력해보세요.
// 속성은 알아서 name, age ......
var Person = {name:'김길동', age:'100', myFnc:function(){return this.name}};
console.log(Person.myFnc());
console.log(Person.age);

// 전역 변수 (Global Variable)
// __filename : 실행한 파일의 이름을 출력한다.
// __dirname : 실행한 파일이 들어 있는 디렉토리를 출력한다.
// application.getRealPath()와 같은 기능
console.log("FileName : %s", __filename);
console.log("DirName : %s", __dirname);
console.log("=========================");
console.dir(Person);
console.log("=========================");
// process객체 : 프로그램을 실행했을 때 만들어지는 프로세스 정보를 가지고 있는 객체
console.log(process.argv);
console.log(process.argv.length);

if(process.argv.length > 1) {
    console.log('2번째 파라미터 %s',process.argv[1]);
}
console.log(process.env);
console.log("=========================");
console.log(process.env['OS']);


var Person = new function(){
    this.name = "정민영";
    this.age = 26;
};

console.log(Person.name);
console.log(Person.age);
