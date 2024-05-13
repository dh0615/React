// 배열의 타입 정의
const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "JS"];

// 배열 안에 객체 값이 들어가 있다면???

interface IPerson {
  name: string;
  age?: number;
}

const personArray: IPerson[] = [{ name: "Mark" }, { name: "Mark", age: 26 }];
