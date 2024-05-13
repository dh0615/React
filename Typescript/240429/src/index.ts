// 타입 주석 달기..

import { Agent } from "http";

// let n: number = 1;
// let b: boolean = true;
// let s: string = "hello";
// let o: object = {};

// 타입 불일치가 발생했을 때 즉각 경고
// n = "a";
// b = "1";
// s = false;
// 이런 경우 경고 뜸
// const a: number = 1;
// 실제 실무에서는 타입 주석 특별한 케이스가 아니면 잘 사용 안함
// 타입스크립트는 타입 추론

// let m = 1;
// let p = "Hello";
// let q = false;
// let obj = {};

// let any: any = 0;
// any = "10";
// any = true;
// any = {};
// any = undefined;

// let unTest: undefined = undefined;

// let numTest = 10;

let o: object = {
  name: "David",
  age: "20",
};
// 실무에서는 object 타입을 거의 안씀

interface Iperson {
  name: "string";
  age: Number;
}

// let good = (IPerson = {
//   name: "David",
//   age: 20,
// });

// let good = {
//   name: "David",
//   age: 20,
// };

// interface IPerson2 {
//   name: string;
//   age: number;
//   etc?: boolean;
// }
// let good1: Iperson2 = {
//   name: "Paris",
//   age: 20,
// };

// let good2: Iperson2 = {
//   name: "Paris",
//   age: 20,
//   etc: true,
// };

// 익명 interface => 고차함수
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = {
  name: "David",
  age: 20,
};

const printMe = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
};
printMe(ai);
// console.log(a);

// import { hello } from "./hello";

// hello("TypeScript");
// const func = () => {
//   console.log("Hello TypeScript");
// };

// console.log("Hello TypeScript");
// let a: number = 1;

// a = "human"; // a에 숫자를 할당하기로 해놓고 human을 넣으면 안되니까 에러 뜸
// let a: number = 1;
