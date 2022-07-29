const data = {
    //프로퍼티키: 프로퍼티밸류
    result: 'success',  //success: 수신 성공 fail: 수신 실패
    //데이터 프로퍼티키의 밸류는 배열
    data: [
        {name: '이름1', gender:'남', age: '10', blood: 'A'},
        {name: '이름2', gender:'여', age: '20', blood: 'B'},
        {name: '이름3', gender:'남', age: '30', blood: 'O'},
        {name: '이름4', gender:'여', age: '40', blood: 'AB'},
        {name: '이름5', gender:'남', age: '50', blood: 'A'}
    ]
};

//0. 회원의 수
{
    if(data.result == 'success') {
        console.log(`총 회원 수: ${data.data.length}명`);
    }
}

//1. 회원 이름을 콘솔에 출력하기
{
    console.log('┌── 회원 명단 ──┐');
    if(data.result == 'success') {
        data.data.forEach(e=>console.log(` 회원 이름: ${e.name}`));
    }
    console.log('└── 회원 명단 ──┘');
}

//2. 회원 나이 총합 출력하기
{
    let sum = 0;
    if(data.result == 'success') {
        data.data.forEach(e=>{
            sum += parseInt(e.age);
        });
    }
    console.log(`회원 나이 총합: ${sum}`);
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

//6. name이 이름3인 회원의 혈액형은?
{
    if(data.result == 'success') {
        data.data.forEach(e=>{
            if(e.name == '이름3') {
                console.log(`이름이 이름3인 회원 혈액형: ${e.blood}`);
            }
        })
    }
}