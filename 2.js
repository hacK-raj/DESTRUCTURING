function uniqueItems(array) {
  return [...new Set(array)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueItems(numbers));
