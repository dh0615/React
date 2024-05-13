import { arrayLength, isEmpty } from "./arraylength";

interface IPerson {
  name: string;
  age?: number;
}

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "Pompompurin"];

const personArray: IPerson[] = [{ name: "Jay" }, { name: "Mark", age: 26 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
);
