//2개의 매개값을 받아 덧셈하는 화살표 함수
//mine
const plus = (e1, e2) => {
    return e1 + e2;
};

const a = plus(3, 4)
console.log(a);

//teacher
{
    //함수 선언문
    function add(x, y) {
        return x+y;
    }
    add(10, 20);
}
{
    //함수 표현식
    const add = function(x, y){
        return x+y;
    }
    add(20, 30);
}
{
    //화살표 함수
    const add = (x, y) => {
        return x+y;
    }
    console.log(add(10,20));

    const f = (x, y) => {
        console.log(y); //return이 생략된 게 아니고 실행문(return undefined;)
    }
}
{
    //화살표 함수 축약
    const add = (x, y) => x+y;
}


const num = [1, 2, 3];
//2배수 함수
{
    const multi2 = e => {
        return e*2;
    }
    console.log(multi2(2));
}

//3배수 함수
{
    const multi3 = e => e*3;
    console.log(multi3(3));
}

//4배수 함수
{
    const multi4 = e => e*4;
    console.log(multi4(4));
}

//teacher
//2, 3, 4배수 화살표 함수
{
    const multi2 = x => x*2;
    const multi3 = x => x*3;
    const multi4 = x => x*4;

    num.forEach(ele=>console.log(multi2(ele)));
    num.forEach(ele=>console.log(multi3(ele)));
    num.forEach(ele=>console.log(multi4(ele)));
}

console.log('===== m배수 함수 =====');

//m배수 함수
{
    //반환값이 함수인 고차함수(m배수 함수를 반환해주는 고차함수)
    function multi(m) {
        return function(n) {
            return m*n;
        }
    }

    //2배수 함수를 반환해주는 고차함수 f2 생성
    const f2 = multi(2);
    console.log(f2(10));    //20

    console.log(multi(2)(10));  //20
    console.log(multi(3)(10));  //30 //3배수 함수를 만들어 3배수 함수의 매개값에 10 대입한 결과
}

console.log('===== m배수 화살표 함수 =====');

//m배수 화살표 함수
{
    const multi = m => n => m*n;
    console.log(multi(3)(10));
    console.log(multi(4)(10));
    console.log(multi(5)(10));
    console.log(multi(100)(10));
}

console.log('===== self task =====');

//mine
//map 사용해서 num의 2, 3, 4배 배열 추출
{
    const multi2 = x => x*2;
    const multi3 = x => x*3;
    const multi4 = x => x*4;

const num2 = num.map(ele=>multi2(ele));
console.log(num2);
const num3 = num.map(ele=>multi3(ele));
console.log(num3);
const num4 = num.map(ele=>multi4(ele));
console.log(num4);

//filter 사용해서 num 전체 추출
const numAll = num.filter(ele=>ele>0);
console.log(numAll);
}