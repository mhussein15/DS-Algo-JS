numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
].flat(Infinity);
const sum = (arrayOfNumbers, size) => {
  //Base Case to return from
  console.log(arrayOfNumbers[size - 1])
  if (size <= 0) {
    return 0;
  } else {
    return sum(arrayOfNumbers, size - 1) + arrayOfNumbers[size - 1];
  }
};

console.log(sum(numbers, numbers.length));
