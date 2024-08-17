function swapValues(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

const x = 5,
  y = 10;
console.log(swapValues(x, y)); 
