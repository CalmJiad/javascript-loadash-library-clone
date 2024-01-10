const arrayFill = (
  givenArr,
  value,
  startIndex = 0,
  endIndex = givenArr.length
) => {
  for (let i = startIndex; i < endIndex; i++) {
    givenArr[i] = value;
  }
  return givenArr;
};

console.log(arrayFill([1, 2, 3], "a")); // Output: [ 'a', 'a', 'a' ]
console.log(arrayFill([1, 2, 3], 2)); // Output: [ 2, 2, 2 ]
console.log(arrayFill([1, 2, 3, 4], "*", 1, 3)); // Output: [ 1, '*', '*', 4 ]
