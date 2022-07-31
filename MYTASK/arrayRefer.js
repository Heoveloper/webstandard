//forEach level1
for(let i = 0; i<names.length; i++){
    console.log(names[i])
}

//forEach level2
function printName(item){
    console.log(item)
}
names.forEach(printName);

//forEach level3
names.forEach(function (item){
    console.log(item)
})

//forEach level4 forEach는 반환값이 없다
names.forEach((item)=>{console.log(item)})

//forEach level5 인덱스번호도 서치 가능
names.forEach((item, index)=>{console.log(item, index)})


//Map names를 배열로 반환
let data = names.map((item)=>{
    return item
})
console.log(data)

//Map level2 ceoList의 이름값만 배열로 반환
let data2 = ceoList.map((item)=>{
    return item.name
})
console.log(data2)


//Filter age==23인 값들을 찾아 배열로 반환
let data3 = ceoList.filter((item)=>{
    return item.age==23
})
console.log(data3)

//Filter names[]에서 L로 시작하는 값들을 찾아 배열로 반환
let data4 = names.filter((item)=>{
    return item.startsWith("L")
})
console.log(data4)


//Some A로 시작하는 이름이 있냐? 없으면 false반환
let data5 = names.some((item)=>{
    return item.startsWith("A")
})
console.log(data5)


//Every 모든 이름이 A로 시작해? 아니면 false반환
let data6 = names.every((item)=>{
    return item.startsWith("A")
})
console.log(data6)

//Every 모든 이름의 길이가 0보다 커? 맞으니까 true반환
let data7 = names.every((item)=>{
    return item.length>0
})
console.log(data7)


//Find 이름이 L로 시작하는 애 찾아줘 > 여러명 있어도 처음 찾는 애 반환
let data8 = names.find((item)=>{
    return item.startsWith("L")
})
console.log(data8)


//FindIndex 이름이 Larry Page인 값의 인덱스 번호 반환
let data9 = names.findIndex((item)=>{
    return item=="Larry Page"
})
console.log(data9)