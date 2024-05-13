// class Person1 {
//   name?: string;
//   age?: number;
// }

// let david = new Person1();
// david.name = "jack";
// david.age = 20;
// console.log(david);

// class를 생성할 때 꼭 반드시 field값을 사전에 정의해야만 class를 만들 수 있는가? = 아님!! >> 접근제어자를 활용해서 field 겂을 생략핤

class Person2 {
  constructor(public name: string, public age: number) {}
}

let jack2: Person2 = new Person2("jack", 32);

console.log(jack2);

class Person3 {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
let jack3: Person3 = new Person3("jack", 20);
console.log(jack3);
