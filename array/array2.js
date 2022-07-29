//과제: 원본 배열을 변경하지 말고 [3, 6, 9] 배열을 새로 생성
const arr = [1, 2, 3];


//map 사용
{
    const arr369 = arr.map(e=>{
        return e*3;
    });
    console.log(arr369);        //결과: [3, 6, 9]
}


//forEach, push 사용
{
    const arr3 = [];
    arr.forEach(e=>arr3.push(e*3));
    console.log(arr3);          //결과: [3, 6, 9]
}


//map 사용 (풀이)
//Array.prototype.map();
//콜백함수의 반환값들로 구성된 새로운 배열을 반환
{
    const result = arr.map(ele=>ele*3);
    console.log(result);        //결과: [3, 6, 9]
}


{
    arr.map(ele=>ele*3) //반환값은 배열
    .forEach(ele=>console.log(ele)); //map의 반환값이 배열이기 때문에 forEach 바로 사용 가능
    //결과: 3, 6, 9 출력
}


{
    const arr1to10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrEven = [];
    arr1to10.forEach(e=> {
        if(e%2 == 0) {
            arrEven.push(e)
        }
    });
    console.log(arrEven); //결과: [2, 4, 6, 8, 10];
}
