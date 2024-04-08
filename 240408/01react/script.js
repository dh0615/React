// react.js에서 자주 사용되는 JavaScript 주요 문법 정리

// 1.객체 줄임 표기법
// const name = "david";
// const age = 20;

// const person = {
//   name,
//   age,
// };

// console.log(person);

// 2.구조분해할당
// const person = {
//   name: "David",
//   age: 20,
// };

// const name = person.name;
// const age = person.age;
// 을 구조분해할당하면,,
// const { name, age } = person;
// console.log(name, age);

// 3.전개연산자 구문
// const arr = [1, 2, 3, 4];
// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

// 4.깊은 복사 (feat. 참조타입)
// const person = {
//   name: "David",
//   age: "20",
// };

// const person2 = person;
// const person3 = { ...person };

// console.log(person2, person3);
// console.log(person === person2);
// console.log(person === person3);

// 5.삼항조건연산자
// const coffee = null;
// console.log(coffee ? coffee.name : "there is no coffee");

// 6.조건부 랜더링 && 단락회로평가
const pudding = {
  name: "custard",
  price: 4500,
};

// const pudding = null;

// if (pudding) {
//   console.log(pudding.name);
// } else {
//   console.log("there is no pudding");
// }

// const result = pudding.name && pudding.price; 를 아래와 같이 쓸 수도있당
const result = pudding?.price;
console.log(result);
