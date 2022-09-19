// 비동기통신
// 순서가 중요하지 않은 작업에 사용하기에 효율적



function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

// 비동기함수 setTiemout()
setTimeout(foo, 3*1000);
// 순차적으로 함수가 실행되는 게 아니기 때문에 bar() 함수부터 실행
bar();

// 0초 지연이어도 비동기함수기 때문에 bar() 함수부터 실행
setTimeout(foo, 0);
bar();