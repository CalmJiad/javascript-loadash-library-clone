const arrayDrop = (givenArr, elementsToDrop = 1) => {
  const splicedArr = givenArr.splice(0, givenArr.length - elementsToDrop);
  return splicedArr;
};

console.log(arrayDrop([1, 2, 3])); // Output: [ 1, 2 ]
console.log(arrayDrop([1, 2, 3], 2)); // Output: [ 1 ]
console.log(arrayDrop([1, 2, 3], 5)); // Output: []
console.log(arrayDrop([1, 2, 3], 0)); // Output: [ 1, 2, 3 ]

// Same functionalities with possible error handled

const arrayToDrop = (givenArr, elementsToDrop = 1) => {
  if (
    !Array.isArray(givenArr) ||
    !Number.isInteger(elementsToDrop) ||
    elementsToDrop < 0
  ) {
    throw new Error(
      "Invalid input. Please provide a valid array and a non-negative integer for elementsToDrop."
    );
  }

  const length = givenArr.length;

  if (elementsToDrop >= length) {
    return [];
  }

  return givenArr.slice(0, length - elementsToDrop);
};

console.log(arrayToDrop([1, 2, 3])); // Output: [ 1, 2 ]
console.log(arrayToDrop([1, 2, 3], 2)); // Output: [ 1 ]
console.log(arrayToDrop([1, 2, 3], 5)); // Output: []
console.log(arrayToDrop([1, 2, 3], 0)); // Output: [ 1, 2, 3 ]
