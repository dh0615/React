import { range } from "./range";

const array: number[] = range(1, 11);
const squares = array.map((value: number) => value * value);

console.log(squares);
// 1~10까지 숫자를 제곱해서 배열로 나타냄
