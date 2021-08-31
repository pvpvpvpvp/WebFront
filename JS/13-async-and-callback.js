function logicA(){
    console.log("begin logicA");

    setTimeout(() => {
        console.log("callback A called");
        console.log("begin logicB");
        {
            setTimeout(() => {
                console.log("callback B called");
            }, 2000);
            console.log("end logicB");
        }
    }, 2000);// 2초뒤 콜백함수 실행.

    console.log("end logicA");
}

// logicA();

function logicPromise(){
    console.log("begin logincPromise");

    // 비동기 처리를 위한 Promise 객체 생성
    return new Promise((resolve,reject)=>{
        // resolve 성공시 값을 전달
        // reject 실패했을 때 사유를 전달

        setTimeout(() => {
            resolve("Success"); // 비동기 처리에 성공하면 resolve 함수를 실행한다
            reject("FAILED");
        }, 2000);
        console.log("end logicPromise");
    });

}

function testLogicPromise() {
    console.log("Test Logic Promise");
    logicPromise()
    .then(value => {
        console.log("PROMISE SUCCESS:",value);
    })
    .catch(reason => {
        console.error("PROMISE FAILED:",reason);5
    })
}


// testLogicPromise();


// async/await는 Promise를 더 쉽게 다룰 수 있도록 해줌

async function asyncFunc(){
    console.log("async function");
    return "SUCCESS";
}

asyncFunc()
.then(value => {
    console.log(value);
});