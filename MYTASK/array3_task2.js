const data = {
    //프로퍼티키: 프로퍼티밸류
    result: 'success',  //success: 수신 성공 fail: 수신 실패
    //데이터 프로퍼티키의 밸류는 배열
    data: [
        {name: '이름1', gender:'남', age: 10, blood: 'A'},
        {name: '이름2', gender:'여', age: 20, blood: 'B'},
        {name: '이름3', gender:'남', age: 30, blood: 'O'},
        {name: '이름4', gender:'여', age: 40, blood: 'AB'},
        {name: '이름5', gender:'남', age: 50, blood: 'A'}
    ]
};

//0. 회원의 수
{
    if(data.result == 'success') {
        console.log(data.data.length);
    }
}

//1. 회원 이름을 콘솔에 출력하기
{
    if(data.result == 'success') {
        data.data.forEach(ele=>console.log(ele.name));
    }
}

//2. 회원 나이 총합 출력하기
{
    let sum = 0;
    data.data.forEach(ele=>sum+=ele.age);
    console.log(`회원 나이의 총합: ${sum}`);
}

//2. 회원 나이 총합 출력하기 (reduce 사용)
{
    const result = data.data.reduce(function(acc, ele) {
        return acc+ele.age
    }, 0);
    console.log(`회원 나이의 총합: ${result}`);
}

//2. 회원 나이 총합 출력하기 (reduce, 화살표 함수)
{
    const result = data.data.reduce((acc, ele)=>acc+ele.age, 0);
    console.log(`회원 나이의 총합: ${result}`);
}

//3. 남자회원의 나이 총합 출력하기
{
    let sum = 0;
    if(data.result == 'success') {
        data.data.forEach(e=>{
            if(e.gender == '남') {
                sum += parseInt(e.age);
            }
        });
    }
    console.log(`남자회원 나이 총합: ${sum}`);
}

//3. 남자회원의 나이 총합 출력하기 (reduce 사용) //self
{
    const result = data.data.reduce((acc, ele)=>{
        if(ele.gender=='남') {
            return acc+ele.age;
        } else {
            return acc+0;
        }});
    console.log(`남자회원 나이 총합: ${result}`);
}

//3. 남자회원의 나이 총합 출력하기 (reduce, filter 사용) //self
{
    const result = data.data.filter(ele=>ele.gender=='남').reduce((acc, ele)=>acc+ele.age, 0);
    console.log(`남자회원 나이 총합: ${result}`);
}

//4. 남자회원, 여자회원을 분리하여 배열에 저장
{
    const men = [];
    const women = [];
    if(data.result == 'success') {
        data.data.forEach(e=>{
            if(e.gender == '남') {
                men.push(e);
            } else {
                women.push(e);
            }
        });
    }
    console.log(men);
    console.log(women);
}

//4. 남자회원, 여자회원을 분리하여 배열에 저장 (reduce 사용) //self
{
    const men = data.data.reduce((acc, ele, idx, arr)=>{
        if(ele.gender=='남')
            acc.push(ele);
            return acc;
    }, []);
    console.log(men);

    const women = data.data.reduce((acc, ele, idx, arr)=>{
        if(ele.gender=='여')
            acc.push(ele);
            return acc;
    }, []);
    console.log(women);
}

//4. 남자회원, 여자회원을 분리하여 배열에 저장 (filter 사용) //self
{
    const men = data.data.filter(ele=>ele.gender=='남');
    const women = data.data.filter(ele=>ele.gender=='여');
    console.log(men);
    console.log(women);
}

//5. A형 회원의 나이 총합 구하기
{
    let sum = 0;
    if(data.result == 'success') {
        data.data.forEach(e=>{
            if(e.blood == 'A') {
                sum += parseInt(e.age);
            }
        });
    }
    console.log(`A형 회원 나이 총합: ${sum}`);
}

//5. A형 회원의 나이 총합 구하기 (reduce, filter 사용)
{
    const result = data.data.filter(ele=>ele.blood=='A').reduce((acc, ele)=>acc+ele.age, 0);
    console.log(`A형 회원 나이 총합: ${result}`);
}

//6. name이 이름3인 회원의 혈액형은?
{
    if(data.result == 'success') {
        data.data.forEach(e=>{
            if(e.name == '이름3') {
                console.log(`이름이 이름3인 회원 혈액형1: ${e.blood}`);
            }
        })
    }
}

//6. name이 이름3인 회원의 혈액형은? (filter 사용)
{
    const result = data.data.filter(ele=>ele.name=='이름3')
    console.log(`이름이 이름3인 회원 혈액형2: ${result[0].blood}`);
}

//7. 혈액형별 인원수 카운트
//결과: {A: 2, B: 1, O: 1, AB: 1}
{
    const result = data.data.reduce((acc, ele, idx, arr)=>{
        const bloodCnt = acc[ele.blood];
        const count = bloodCnt || 0;

        return {
            ...acc,
            [ele.blood]: count+1,
        };
    }, {});
    console.log(result);
}

//8. 남성 회원의 평균 연령
{
    const menCnt = data.data.reduce((acc, ele)=>acc+(ele.gender=='남'), 0);

    const result = data.data.reduce((acc, ele, idx, arr)=>{
        if (ele.gender=='남'){
            return acc+ele.age;
        } else {
            return acc + 0;
        }
    }, 0);
    console.log(result/menCnt);
}

//9. 나이가 가장 많은 회원의 혈액형은?
{
    const bloodTypeOfTheOldest =
    data.data.reduce((acc, ele, idx, arr)=>(acc.age < ele.age) ? ele : acc);

    console.log(`나이가 가장 많은 회원의 혈액형: ${bloodTypeOfTheOldest.blood}형`);
}

//10. data.data를 밑의 결과처럼 추출하기
// [ 
//     {name: '이름1', age: 10},
//     {name: '이름2', age: 20},
//     {name: '이름3', age: 30},
//     {name: '이름4', age: 40},
//     {name: '이름5', age: 50}
// ]

{
    const processedData = data.data.reduce((acc, ele)=>{
        acc.push({name: ele.name, age: ele.age});
        return acc;
    }, []);

    console.log(processedData);
}

//11. 수신된 데이터에 남자회원이 있는지 여부
{
    const isExist = data.data.some(ele=>ele.gender=='남');

    console.log(isExist);
}

//12. 수신된 데이터ㅇ가 모두 남자회원인지 여부
{
    const isExist = data.data.every(ele=>ele.gender=='남');

    console.log(`수신된 데이터가 모두 남자회원인지? ${isExist}`);
}

//13. 여성회원을 나이 내림차순으로 정렬하기
{
    const descWomen = data.data.filter(ele=>ele.gender=='여')
    .sort((ele1, ele2)=>ele2.age - ele1.age);

    console.log(descWomen);
}

//13-1 self. 여성회원을 나이 내림차순으로 정렬하기(이름, 나이만)