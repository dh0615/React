import { pureDelete } from "./pureDelete";

const mixedArray: object[] = [
  [],
  { name: "Mark" },
  { name: "Jay", age: 26 },
  ["Javascript"],
];

const objectOnly: object[] = pureDelete(mixedArray, (value) =>
  Array.isArray(value)
);
console.log(mixedArray, objectOnly);
