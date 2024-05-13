// import { range } from "./range";

// const array: number[] = range(1, 11);

// const first: number[] = array.filter((value) => value <= 5);
// const second: number[] = array.filter((value) => value >= 6);

// console.log(first, second);

import { range } from "./range";

const array: number[] = range(1, 11);

const half = array.length / 2;
const belowHalf = array.filter((value, index) => index < half);
const overHalf = array.filter((value, index) => index >= half);

console.log(belowHalf, overHalf);
