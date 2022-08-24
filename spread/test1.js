//스프레드 문법
//의미: 이터러블 객체, 객체 리터럴의 개별적인 값들의 목록으로
//      만들어 객체 표현식을 확정할 수 있게 해주는 문법
//용도: 배열복사, 추가, 병합
//      객체복사, 추가, 병합
//...+이터러블 객체, ...+객체 리터럴

{
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    // const copy = arr1;

    //배열 복사
    const copy = [...arr1]  //새로운 배열로 복사
    console.log(copy);

    //배열 추가
    console.log([0, ...arr1, 10, 20]);

    //배열 병합
    console.log([...arr1, ...arr2]);
}

{
    const obj1 = {name: '홍길동', age: 10};
    const obj2 = {name: '홍길순', age: 20};
    const obj3 = {blood: 'AB', weight: 50};

    //객체 복사
    const copy = {...obj1}
    console.log(copy);

    //객체 프로퍼티 추가
    console.log({...obj1, blood: 'B'});

    //객체 병합(키가 같으면 교체, 다르면 추가)
    console.log({...obj1, ...obj2});
    console.log({...obj2, ...obj3});

    delete obj1.name;
    console.log(obj1);

    obj1.name="홍길동";
    console.log(obj1);
}