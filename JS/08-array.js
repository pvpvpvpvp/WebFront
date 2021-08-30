

const v1 = new Array(10);
const v2 = new Array();
const v3 = new Array(2021,"String",true);



console.log("v1:",v1,v1.length);
console.log("v2:",v2,v2.length);
console.log("v3:",v3,v3.length);

// 리터럴로 생성 (추천)

const v4 = [];
const v5 = [2021,"String",true];

// 배열 타입 확인시 typeof를 사용하면 안된다.
console.log("v4:",v4,typeof v4);
console.log("v5:",v5,typeof v5);

// 배열 타입 확인 : Array.isArray() 사용
console.log("v4:",Array.isArray(v4));
console.log("v5:",Array.isArray(v5));

const v6 = new Array(10).fill(1);

console.log("v6:",v6);
v6.fill("aa");
console.log("v6:",v6);

const person ={
    name : ["홍길동","고길동"],
    age: [28,43],
    job:["도적","검성"]
};

// 객체의 속성 -> 배열처럼 접근가능

console.log(person.name,person['name']);
console.log(person.age,person['age']);

const arr = [];
console.log(arr,arr.length);
// 인덱스를 벗어난 범위로 접근
arr[10]=2021;
console.log(arr,arr.length);

console.log("====== 배열의 메서드");

const veges =["배추","무","쪽파"];
const sources = ["소금","고춧가루","새우젓"];

// 배열 합치기 concat
const items = veges.concat(sources);

console.log("concat",items);

// 배열 요소합치기 join

console.log("join:",items.join(","));