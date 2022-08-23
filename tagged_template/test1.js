// const str = '내 이름은 홍길동입니다';
// console.log(str);


// const name = '홍길동';
// const str2 = '내 이름은 ' + name + '입니다';
// console.log(str2);

// //template literal
// const str3 = `내 이름은 ${name}입니다`;
// console.log(str3);

//tagged template
const tagged0 = (strings, exp1, exp2, exp3) => {
    console.log(strings);
    console.log(exp1, exp2, exp3);

    return `${strings[0]}${exp1}${strings[1]}${exp2}${strings[2]}`;
}
const tagged = (strings, exp1, exp2, exp3) => {
    console.log(strings);
    console.log(exp1, exp2, exp3);

    return `${exp1}-${exp2}`;
}
const tagged2 = (strings,...exp) => {
    console.log(strings);

    const str = exp.map((ele, i) => `${ele}-${i}`)
                    .join();

    return str;
}

const name = '홍길동';
const age = 30;
const blood = 'B';
const str0 = tagged0 `내 이름은 ${name}이고 나이는 ${age}입니다.`;
// const str4 = tagged `내 이름은 ${name}이고 나이는 ${age}입니다.`;
const str4 = tagged2 `12${name}34${age}56${blood}78`;

console.log(str0);
console.log(str4);