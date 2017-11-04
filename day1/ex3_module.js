// 모듈을 만들때 : exports.모듈명 = fn
// var 변수명 = {}의 객체에다가 변수명{add:function(){}} 식으로 만들어 주는 역핳을 함
exports.add = function(n1,n2) {
    return n1+n2;
};

exports.minus = function(n1,n2) {
    return n1-n2;
};

exports.gob = function(n1,n2) {
    return n1*n2;
};

exports.nanu = function(n1,n2) {
    return n1/n2;
};
