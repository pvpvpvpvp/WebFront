// 연습문제 1
// 2단부터 9단 까지
// for while

let a=2;
while(a<10)
{
    b=1;
    while(b<10)
    {
        console.log(a,"*",b,"=",a*b);
        b++;
    }
    a++;
}
console.log("End of while");

for(let a=2;a<10;a++)
{
    for (let b = 1; b < 10; b++) {
        process.stdout.write(a+"*"+b+"="+a*b+"\t");
    }
    console.log();
}
console.log("End of for");

// 연문 2 별찍기
// 5 
// 4
// 3
// 2
// 1
// for while

let bb= 5;
cc=5;
while(bb>0)
{
    cc=bb;
    while(cc>0)
    {
        process.stdout.write("*");
        cc--;
    }
    process.stdout.write("\n");
    bb--;
}
console.log("End of while");


for(let aa=5;aa>0;aa--)
{
    let aaa = "";
    for(let bb=0;bb<aa;bb++)
    {
      aaa=aaa+"*";
    }
    console.log(aaa)
}
console.log("End of for");


//  ES6 for ... in
let obj ={
    name : ["홍길동","고길동"],
    age: [28,43],
    job:["도적","검성"]
};


for (let key in obj)
{
    console.log(key, "->",obj[key]);
}

// for (let key of obj)
// {
//     console.log(key.name," ", key.age," ",key.job);
// }
// 순환 가능 객체여야 한다.
// for (let key of obj)
// {
//     console.log(key);
// }

const arr = [5,1,4,3,2,9,8,0];

for (let key in arr) // 값이 아니고 순번을 나타냄 key값은 arr.size만큼 반복
{
    console.log(key," ",arr[key]);
}
console.log("==========================")
for (let key of arr) // 순회 객체의 값을 순호
{
    console.log(key);
}