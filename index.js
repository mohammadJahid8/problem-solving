function rotateLeft(arr, number) {
  for (let i = 0; i < number; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); //output [ 5, 1, 2, 3, 4 ]
