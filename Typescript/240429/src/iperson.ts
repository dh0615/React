interface Iperson4 {
  name: string;
  age?: number;
}
class Person4 implements Iperson4 {
  // name: string;
  // age?: number;

  constructor(public name: string, public age?: number) {
    // this.name = name;
    // this.age = age;
  }
}

let jack4: Iperson4 = new Person4("jack", 20);

console.log(jack4);
