const arrayChunk = (arr, size) => {
  let res = [];
  let tempArr = [];
  arr.forEach((item) => {
    if (tempArr.length === size) {
      res.push(tempArr);
      tempArr = [];
      tempArr.push(item);
    } else {
      tempArr.push(item);
    }
  });
  res.push(tempArr);
  tempArr = [];
  console.log(res);
};

arrayChunk(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"], 2);

// Output will be something like this:
// [[ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ], [ 'g', 'h' ], [ 'i', 'j' ], [ 'k' ]]
