const arrayDrop = (givenArr, elementsToDrop = 1) => {
  const slicedArr = givenArr.slice(0, elementsToDrop);
  return givenArr.filter((item) => !slicedArr.includes(item));
};

console.log(arrayDrop([1, 2, 3])); // Output: [ 2, 3 ]
console.log(arrayDrop([1, 2, 3], 2)); // Output: [ 3 ]
console.log(arrayDrop([1, 2, 3], 5)); // Output: []
console.log(arrayDrop([1, 2, 3], 0)); // Output: [ 1, 2, 3 ]
