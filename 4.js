function extractElements(array) {
  const [first, second, , last] = array;
  return [first, second, last];
}

const array = [1, 2, 3, 4, 5];
console.log(extractElements(array)); 
