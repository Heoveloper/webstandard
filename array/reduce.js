const arr = [1, 2, 3];

//reduce
//단일값을 반환하는데 반환값이 숫자일수도 식일수도 배열일수도...등 있다.
const result = arr.reduce((acc, ele, idx, arr)=>{
                    console.log(acc, ele);
                    return acc + ele;
                }, 0);

console.log(result);