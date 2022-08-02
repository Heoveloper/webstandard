const arr = ['a', 'p', 'p', 'l', 'e'];
const arr2 = [6, 5, 7, 4, 35];

//Array.prototype.sort() 사용
//sort()는 배열요소를 문자열로 변환하여 각 문자의 유니코드 값에 따라 정렬한다.
//따라서 요소가 숫자인 경우는 콜백함수를 통해 정렬로직을 반영해야한다.
//1) arr 오름차순 정렬
const answer1 = arr.sort();
console.log(answer1);
//2) arr 내림차순 정렬
const answer2 = answer1.reverse();
console.log(answer2);
//3) arr2 오름차순 정렬
const answer3 = arr2.sort((e1, e2)=>e1-e2);
console.log(answer3);
//3) arr2 내림차순 정렬
const comarefunc = (e1, e2)=>{
    // if(e1 < e2) {
    //     return 1;
    // }
    // if(e1 > e2) {
    //     return -1;
    // }
    // if(e1 == e2) {
    //     return 0
    // }
    return e2-e1;
};
const answer4 = arr2.sort(comarefunc);
console.log(answer3);