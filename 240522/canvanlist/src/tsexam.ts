// // 함수 타입 & 제네릭 타입
// // 함수는 어떤 값의 타입을 받아서 어떤 값을 반환

// const func = (a: number, b: number): number => {
//   return a + b;
// };

// // 1. 함수에 기본 매개변수를 설정할 때
// const introduce = (name = "David") => {
//   console.log(`name: ${name}`);
// };

// // 2. 함수에 선택적 매개변수를 설정할 때
// const introduce01 = (name = "Mark", age: number, tall?: number) => {
//   //필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다. 그러므로 tall?: number는 가장 마지막으로 와야함
//   console.log(`name: ${name}`);
//   console.log(`tall: ${tall}`);

//   // 타입 가드 = 타입 좁혀나간다는 의미
//   if (typeof tall === "number") {
//     console.log(`tall: ${tall + 10}`);
//   }
// };

// // 3. 함수에 전개 연산자 형식의 매개변수 => rest매개변수를 설정할 때
// const getSum = (...rest: number[]): number => {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// };
// getSum(1, 2, 3);

// // 4. 함수 타입표현식 =>  함수 타입별칭
// // interface extends || type 대수타입 유니온 / 인터섹션을 만들어낼 수 있다
// // interface : 동일한 인터페이스명 사용 가능 || type : 동일한 타입명 사용 불가능
// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a + b;
// const sub: Add = (a, b) => a - b;
// const multiply: Add = (a, b) => a * b;
// const divide: Add = (a, b) => a / b;

// // 5. 함수 타입 표현식 => 호출 시그니처 형식
// type Operation = {
//   (a: number, b: number): number;
// };
// const add2: Operation = (a, b) => a + b;
// add2.name;

// // 6. 함수 타입호환성
// // 특정 함수의 타입을 다른 함수의 타입으로 포함시킬 수 있는가를 따져보는 개념

// type A = () => number; // 슈퍼타입 : 보다 상위의 개념
// type B = () => 10; // 서브타입

// // 서브타입 아이템을 슈퍼타입의 아이템에 할당하는 행위 : upcasting
// // 슈퍼타입 아이템을 서브타입의 아이템에 할당하는 행위 : downcasting

// let a: A = () => 10;
// let b: B = () => 10;

// a = b;
// // b = a;

// // 7. 함수 타입호환성 > 매개변수 기준
// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // c = d;
// d = c;
// // 위에서 했던 것 처럼 슈퍼타입에 서브타입을 할당할 수 없음

// type Animal = {
//   name: string;
// };

// type Dog = {
//   name: string;
//   color: string;
// };
// // 슈퍼타입은 값을 많이 갖는게 아니라 포용할 수 있는가에 따라 결정되므로 확장성이 큰 Animal이 슈퍼타입임

// let animalFunc = (animal: Animal) => {
//   console.log(animal.name);
// };

// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // animalFunc = dogFunc;
// dogFunc = animalFunc;
// // 슈퍼타입이 서브타입의 downcasting이 되어야 허용됨

// // 8.함수 타입호환성 > 매개변수 기준 (매개변수의 개수 다른 경우)
// type Func1 = (a: number, b: number) => void;
// type Func2 = (a: number) => void;

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2;
// // 매개변수가 2개니까 하나 받을 수 있음

// // func2 = func1;
// // 이거는 호환 안됨

// // 9. 함수 오버로딩
// // * 익명함수에서는 사용이 불가능하다 => 화살표함수에서 사용 x
// // function형태로만 사용 가능

// // 함수 오버로드
// function func01(a: number): void;
// function func01(a: number, b: number, c: number): void;

// // 함수 구현
// function func01(a: number, b?: number, c?: number) {
//   if (typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }

// // 함수 호출
// func01(1);
// //func01(1, 2);  이거에 해당하는 경우의 수가 없기 때문에 실행 안됨
// func01(1, 2, 3);

// // 10.함수구현 타입정의 => 커스터마이징 => 사용자 정의 타입 가드

// type Dog01 = {
//   name: string;
//   isBark: boolean;
// };
// type Cat01 = {
//   name: string;
//   isScratch: boolean;
// };

// type Animal01 = Dog01 | Cat01;

// const warning = (animal: Animal01) => {
//   // 'Animal01' 형식에 'isBark' 속성이 없습니다. 'Cat01' 형식에 'isBark' 속성이 없습니다.
//   // >> 타입을 커스팅마이징 해서 사용자가 타입을 가드해서 정의할 수 있게 해줘야함
//   if ("isBark" in animal) {
//     console.log(animal.isBark);
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch);
//   }
// };

// const isDog = (animal: Animal01) => {
//   return (animal as Dog01).isBark;
// };

// // ==================== 제네릭 타입 개념 복습
// // Generic = > general(종합적인) : Genetal hospital 종합병원..
// // 현재 어떠한 타입의 state(변수)가 들어올지 모르는데 타입 정의해야 할 때
// // 제네릭 타입을 사용하는 이유 : 현재 시점에서는 어떤 타입의 변수 및 state가 들어올 지 모르고 있는 상태에서 우선, 타입을 정의해야하는 경우

// // 반론제기 !! > 어떤 값이 들어올지 미정, 타입 cheat key : any
// const func02 = (value: unknown) => {
//   return value;
// };

// let num = func02(10);
// let str = func02("string");

// // num.toUpperCase();
// // const func02 = (value: any) 쓰면 이런 성립 안되는 말 써도 오류안뜨기 때문에 any 남발하면 안됨
// // num.toFixed();
// // unknown은 모든 타입 다 받을 수 있는 슈퍼타입이라서 숫자 안올 수도있다고 생각하니까 맞는거에도 오류가 뜨니까 제네릭 알아야 함
// if (typeof num === "number") {
//   num.toFixed();
// }
// // 이렇게 쓰면 되지만 제네릭 쓰면 더 효율적~.~

// // 반론제기 !! > 어떤 값이 들어올지 미정, 타입 cheat key : any

// const func03 = <T>(value: T): T => {
//   return value;
// };

// let num03 = func03(10);

// const func04 = <T>(value: T): T => {
//   return value;
// };

// // 함수 안에 직접적으로 타입을 명시하는 경우
// let arr = func04<[number, number, number]>([1, 2, 3]);

// // 제네릭 타입 응용 !!
// const swap = <T, U>(a: T, b: U) => {
//   return [b, a];
// };
// //숫자가 들어올 지, 문자가 들어올 지 모르기 때문에 들어올 수 있는 타입의 개수만큼 허용해주기 위해서 두개의 변수타입을 지정해줌

// const [a01, b01] = swap(1, 2);
// // 반론제기 !! 타입변수 선언 !! > 변수 타입이 꼭 하나라는 법 ?!

// // 제네릭 타입 응용 2!!
// const returnFirstValue = <T>(data: T[]) => {
//   return data[0];
// };

// const num05 = returnFirstValue([0, 1, 2]);

// const str05 = returnFirstValue([1, "Hello", "World"]);
// // 배열 안의 타입을 정해주지 않아도 오류가 안남을 확인 가능

// const returnFirstValue01 = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };
// // 배열 안에 찾아오고자 하는 값이 명확한 경우

// const getLength = <T extends { length: number }>(data: T) => {
//   data.length;
// };
// // length: number라는 속성을 갖고 있는 타입 변수는 다 포함시키겠다는 뜻
// getLength("123");
// getLength([1, 2, 3]);
// getLength({
//   length: 2,
// });

// // getLength(null);
// // getLength(undefined);
// // 이거는 안됨

// 제네릭 타입 응용 : React.js => JSX 문법을 활용한 반복실행 처리 > map
// 타입정의 허들
// 기존 배열을 가져와서 어떤 연산작업 후 새로운 배열을 생성!!
// a: [1,2,3,4] => b = ["1", "2", "3"]

// const arr: number[] = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
// // [2,4,6]

// const map = (
//   arr: unknown[],
//   callback: (item: unknown) => unknown
// ): unknown[] => {
//   return [];
// };

// map 매서드 타입을 타입변수를 활용한 제네릭 형식으로 정의했을 때

// const arr = [1, 2, 3];
// const map = <T, U>(arr: T[], callback: (item: T) => U): U[] => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// // map(arr, (it) => it * 2);
// map(arr, (it) => it.toString());

// // forEach 매서드 타입 정의

// const arr2 = [1, 2, 3];

// arr2.forEach((it) => console.log(it));

// const forEach = <T>(arr: T[], callback: (item: T) => void) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// // 제네릭 응용 : 인터페이스

// interface KeyPair<K, T> {
//   key: K;
//   value: T;
// }

// let KeyPair: KeyPair<string, number> = {
//   key: "Key",
//   value: 0,
// };

// let KeyPair2: KeyPair<boolean, string[]> = {
//   key: true,
//   value: ["1"],
// };

// interface Map<V> {
//   [key: string]: V;
// }

// let stringMap: Map<string> = {
//   key: "value",
// };

// let booleanMap = {
//   key: true,
// };

// type Map2<V> = {
//   [key: string]: V;
// };

// let stringMap2: Map2<string> = {
//   key: "string",
// };

// // 제네릭 인터페잇스를 활용한 또다른 예제

// interface Student {
//   type: "student";
//   school: string;
// }
// interface Developer {
//   type: "developer";
//   skill: string;
// }

// // type A = B | C;

// interface User<T> {
//   name: string;
//   profile: T;
// }

// const goToSchool = (user: User<Student>) => {
//   if (user.profile.type !== "student") {
//     console.log("잘못오셨습니다");
//     return;
//   }
//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// };

// const developerUser: User<Developer> = {
//   name: "Mark",
//   profile: {
//     type: "developer",
//     skill: "TS",
//   },
// };
// const studentUser: User<Student> = {
//   name: "Jane",
//   profile: {
//     type: "student",
//     school: "TS",
//   },
// };

// // 제네릭 응용
// // class NumberList {
// //   constructor(public list: number[]) {}
// //   push(data: number) {
// //     this.list.push(data);
// //   }
// //   pop() {
// //     return this.list.pop();
// //   }
// //   print() {
// //     console.log(this.list);
// //   }
// // }

// // class StringList {
// //   constructor(public list: number[]) {}
// //   push(data: number) {
// //     this.list.push(data);
// //   }
// //   pop() {
// //     return this.list.pop();
// //   }
// //   print() {
// //     console.log(this.list);
// //   }
// // }
// // const numberList = new NumberList([1, 2, 3]);
// // const stringList = new StringList([1, 2, 3]);
// //
// class List<T> {
//   constructor(public list: T[]) {}
//   push(data: number) {
//     this.list.push();
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }
// const numberList = new List([1, 2, 3]);
// const stringList = new List(["1", "2", "3"]);
