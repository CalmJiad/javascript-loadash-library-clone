const arrayCompact = (arr) => {
  const resArr = arr.reduce((acc, curr) => {
    if (
      curr !== false &&
      curr !== null &&
      curr !== 0 &&
      curr !== undefined &&
      curr !== "" &&
      !Number.isNaN(curr)
    ) {
      acc.push(curr);
    }
    return acc;
  }, []);

  console.log(resArr);
};

arrayCompact([0, 1, false, 2, "", NaN, 3, 4, 5]);

// final output
// [ 1, 2, 3, 4, 5 ]
