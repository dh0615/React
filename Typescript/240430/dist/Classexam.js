// JS Class : 반복적인 객체를 생성하고자 할 때 비효율성 감소
// const studentA = {
//   name: "폼폼푸린",
//   grade: "A+",
//   age: 2,
//   study() {
//     console.log("폼폼푸린");
//   },
//   introduce() {
//     console.log("안녕하세요..");
//   },
// };
// const studentB = {
//   name: "후추",
//   grade: "A+",
//   age: 4,
//   study() {
//     console.log("산책을 좋아함");
//   },
//   introduce() {
//     console.log("산책..");
//   },
// };
class Student {
    // 필드
    name;
    grade;
    age;
    // 생성자 함수
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드 = 함수 : 객체를 클래스 안에서 생성하는 함수
    study() {
        console.log("열심히공부함..");
    }
    introduce() {
        console.log(`안녕하세요~~ ${this.name}입니다..`);
    }
}
const studentA = new Student("폼폼푸린", "A+", "3");
studentA.study();
studentA.introduce();
//JS Class 생성 후 상속 기능
// 부모 >  자식
class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}
const studentB = new StudentDeveloper("폼폼푸린", "B+", "3", "신발숨기기");
studentB.programming();
export {};
// TS Class를 생성하거나 상속하거나 받는 개념 거의 동일하나, 살짝 "접근제어자 + 타입 정의"만 상이함
//# sourceMappingURL=Classexam.js.map