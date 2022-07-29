// let fruits = ['사과', '바나나']

//콜백함수 매개값 최대 3개
// fruits.forEach(function (item, index, array) {
//     console.log(item, index);
// })

// fruits.forEach(function (ele, idx, arr) {
//     console.log(ele, idx, arr, this);
// }, [1, 2, 3])

{
    //1) Array.prototype.forEach()
    //콜백함수 내에서 배열을 순회하면서 요소 하나에 대한 수행 처리
    //반환값 undefined
    let fruits = ['사과', '바나나'];
    console.log(fruits);

    fruits.push('딸기');
    console.log(fruits);

    // const findedIdx2 = fruits.indexOf('바나나2');
    // console.log(findedIdx2); //'바나나2'가 없기 때문에 -1 반환
    // console.log(fruits);

    // fruits.splice(2, 1); //fruits 배열에서 딸기 삭제 (arr[2] 번째에서 1 번째)
    // console.log(fruits);

    const findedIdx = fruits.indexOf('바나나'); //바나나 위치 찾기
    console.log(findedIdx); //바나나 위치: arr[1] => 1로 반환
    const deletedElement = fruits.splice(findedIdx, 1);
    console.log(deletedElement[0]);
    fruits.forEach(ele=>console.log(ele));
}

{
    //스프레드 문법 [...배열]
    let fruits = ['사과', '바나나', '딸기'];
    let fruits2 = ['수박', '참외'];

    //배열 복사
    let fruits3 = fruits;
    let fruits4 = [...fruits];

    //배열 결합
    let fruits5 = [...fruits, ...fruits2, '오렌지'];
    console.log(fruits5);
}