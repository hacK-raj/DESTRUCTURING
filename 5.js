function findMinMax(array) {
  return {
    max: Math.max(...array),
    min: Math.min(...array),
  };
}

const array = [5, 2, 7, 1, 9];
console.log(findMinMax(array)); 
