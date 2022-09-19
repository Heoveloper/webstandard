// 동기통신
// 순서가 순차적으로 진행되기 때문에 순서가 중요한 작업에 사용
// 앞선 작업이 끝나야 다음 작업이 진행되기 때문에 순서가 중요하지 않은 작업에는 비효율적



// 특정시간(delay) 지난 후에 함수(func) 호출
function sleep(func, delay) {
    const delayUntil = Date.now() + delay;
    while(Date.now() < delayUntil);
    func();
}

function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

// 3초(3*1000) 후에 foo함수 호출
sleep(foo, 3*1000);
// 순차적으로 함수가 실행되기 때문에 bar() 함수도 지연
bar();