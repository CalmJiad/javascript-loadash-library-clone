// as an arguments it will receive two arrays and show the unmatched values between two
const arrayDifference = (arr1, arr2) => {
  const filteredArr = [];

  arr1.forEach((arr1item) => {
    if (!(arr2.includes(arr1item) && !filteredArr.includes(arr1item))) {
      filteredArr.push(arr1item);
    }
  });

  return filteredArr;
};

const result = arrayDifference([2, 1, 100, 55, 5, 4, 3], [2, 3, 4, 55]);

console.log(result); //output: [ 1, 100, 5 ]

// More optimized version of this code

const arrDifference = (arr1, arr2) => {
  return arr1.filter((arr1item) => !arr2.includes(arr1item));
};

const res = arrayDifference([2, 1, 100, 55, 5, 4, 3], [2, 3, 4, 55]);

console.log(result); //output: [ 1, 100, 5 ]
