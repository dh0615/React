// const studentA = {
//   name: "David",
//   grade: "B+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };
// const studentB = {
//   name: "Mark",
//   grade: "A+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };

// 위 객체를 class를 활용해서 생성할 수 있도록 class를 만들어보세요

class Student {
  // 객체에서 사용할 수 있는 key값 선언 !!
  // field
  name;
  age;
  grade;

  // constructor function = 생성자 함수
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // method 정의
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다`);
  }
}

const studentA = new Student("Mark", 22, "B+");
console.log(studentA);
console.log(studentA.study());
console.log(studentA.introduce());

//class를 활용해서 인스턴스 객체를 생성하고자 할 때 알고 있어야하는 개념 === 상속
// 부모 > 자녀 물려주는 것
// Class 생성 및 선언할 때에도 A => B 값 상속

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}
const studentB = new StudentDeveloper("John", 21, "A+", "JS");
console.log(studentB.introduce());
