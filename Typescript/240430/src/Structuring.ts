import { IPerson, ICompany } from "./iPerson_iCompany";

const jack: IPerson = {
  name: "jack",
  age: 22,
};
const apple: ICompany = {
  name: "Apple",
  age: 40,
};

let { name, age } = jack;
