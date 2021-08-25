
// 한줄 주석

/* 여러 줄 주석
 : JavaScript 주석은 C , Java와 동일
*/

// 내장 객체 console

console.info("정보 메세지");
console.debug("디버그 메시지");
console.warn("경고메시지");
console.log("에러 메시지");

console.log("에러 메시지",2021,true,"String");

console.log("Process Version:",process.version);

// 객체의 속성 접근: .으로 접근

console.log(Math.PI);

var testVar =10; //전통적 할당 방법: 가급적 사용을 지양

let testLet = "let"; // let 변경 가능
const TEST_CONST = "const"; // 변경 불가능
// 상수처렁 활용,선언과 동시에 할당해야 한다.

console.log("testVar",testVar);
console.log("testlet",testLet);
console.log("TEST_CONST",TEST_CONST);

testLet = "changed";
testVar = "changed"
// TEST_CONST = "changed";
console.log("testVar",testVar);
console.log("testlet",testLet);
console.log("TEST_CONST",TEST_CONST);


// javaScript는 동적 타입 언어
//      데이터 타입이 고정되지 않고
//      데이터가 할당 되었을 때, 그 타입이 결정
let v ="This is String";

// 데이터의 타입을 체크해야 한다.
console.log(v," = > ",typeof v);

v= 2021;

console.log(v," = > ",typeof v);

let c;

console.log(c," = > ",typeof c);
