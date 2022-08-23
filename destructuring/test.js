const person = {
    name: '홍길동',
    age: 30
}

// person 객체를 반환하는 함수
{
    //1) 함수 선언문
    function getPerson(){
        return person;
    }

    const {name, age} = getPerson();
    console.log(name, age);
}

{
    //2) 함수 표현식
    const getPerson = function(){
        return person;
    }
    const {name, age} = getPerson();
    console.log(name, age);
}

{
    //3) 화살표 함수
    const getPerson = () => {
        return person;
    }
    const {name, age} = getPerson();
    console.log(name, age);
}

{
    //4) 화살표 함수 V2
    const getPerson = () => person;
    
    const {name, age} = getPerson();
    console.log(name, age);
}

{
    //5) 화살표 함수 V3
    const {name, age} = (() => person)();
    console.log(name, age);
}