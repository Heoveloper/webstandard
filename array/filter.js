{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const result = arr.filter(ele => ele % 2 == 0);
  console.log(result);
}

{
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    arr.filter(ele => ele % 2 == 0)
    .forEach(ele => console.log(ele));

    //결과 2, 4, 6, 8, 10
}
