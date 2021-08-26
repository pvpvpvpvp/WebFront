//  함수 선언 식
function sum(a, b) {    //  매개변수 a, b를 입력받음
    return a + b;
    //  return 함수 종료, 출력 데이터를 반환할 수 있음
}

//  함수 호출
console.log("SUM:", sum(10, 20));

//  함수 표현 식: 이름이 없는 함수 -> 익명 함수
//  그 자체로 독립된 객체
//      - 변수에 할당될 수 있다
//      - 다른 함수의 매개변수로 전달될 수 있다
const asum = function(a, b) {
    return a + b;
}
console.log(typeof asum, asum(10, 20));

//  익명 함수의 활용 1. 즉시 실행 함수
let initText;
(function(number) {
    let textList = ["홀수", "짝수"];    
    //  초기화에만 사용될 임시 변수 
    if (number % 2 == 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`인수 ${number}를 이용하여 즉시 실행하였습니다.`);
})(5);  //  -> 즉시 실행
console.log(initText);
// console.log(textList); -> Error : 스코프가 종료
console.log("====== arguments");
//  함수의 매개 변수
//  JavaScript는 선언부의 매개 변수 갯수와 상관 없이
//  모든 매개변수가 arguments라는 이름의 배열로 전달
function getNumberTotal() { //  매개변수를 선언하지 않음
    // console.log(arguments, arguments.length);
    //  모든 매개변수가 arguments로 전달된다
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            result += arguments[i];
        }
    }
    return result;
}

console.log(getNumberTotal());  //  매개변수 없음
console.log(getNumberTotal(1, 2, 3, 4, 5)); //  매개변수 5개
console.log(getNumberTotal(1, 2, "3", 4, 5));

console.log("===== Callback");
//  함수는 문법적 기능이 아니라, 독립된 객체

function usingCallback(val1, val2, func) {
    //  기능을 미정 상태로 두고
    //  함수 호출시 외부로부터 실행 로직을 전달
    //  거꾸로 호출 : -> Callback
    if (typeof func == "function") {
        //  매개변수 func는 함수다
        func(val1, val2);
    }
}

usingCallback(7, 5, function(v1, v2) {
    console.log(v1 + v2);   // 실행 로직을 주입
});

usingCallback(7, 5, function(v1, v2) {
    console.log(v1 * v2);   //  실행 로직을 호출시 주입
})

//  화살표 함수 =>
//  매개변수 없음
const f1 = function() { return "hello" };
const f1Arrow = () => "hello";

console.log(f1(), typeof f1);
console.log(f1Arrow(), typeof f1Arrow);

//  매개변수 한개
const f2 = function(name) { return "Hello " + name };
const f2Arrow = name => "Hello " + name;

console.log(f2("홍길동"));
console.log(f2Arrow("홍길동"));

//  매개 변수 여러개
const f3 = function(a, b) { return a + b };
const f3Arrow = (a, b) => a + b;

console.log(f3(7, 5));
console.log(f3Arrow(7, 5));

//  콜백함수를 전달할 때 활용
usingCallback(10, 20, (v1, v2) => { console.log(v1 + v2) });