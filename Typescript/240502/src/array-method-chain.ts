const multiply = (result: number, val: number): number => result * val;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tempResult = numbers
  .filter((val) => val % 2 !== 0)
  .map((val) => val * val)
  .reduce(multiply, 1); // 1 = result = 초기값

const result = Math.sqrt(tempResult); // 893025라는 제곱 값이 뭐를 제곱해서 나온건지 알려줌
console.log(result);
