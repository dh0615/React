class Employee {
    name;
    age;
    position;
    // 필드
    name; // 자동으로 public이라는 접근 제어자의 속성을 가지고 있음
    age; // 자동으로 public이라는 접근 제어자의 속성을 가지고 있음
    position; // 자동으로 public이라는 접근 제어자의 속성을 가지고 있음
    // 생성자 함수
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }
    // 메서드
    work() {
        console.log("열심히 일함..");
    }
}
const employeeA = new Employee("폼폼푸린", 4, "리트리버..");
employeeA.work();
// employeeA.name = "후추"; // public이 아니라 private로 위에서 지정해주면 name값 수정이 불가해짐
employeeA.position = "푸들..";
console.log(employeeA);
// 상속 = extends : 부모요소로부터 어떠한 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무는 없음
// 실행 = implement :  부모로부터 받은 값은 반드시 구현해야함
class ExecutiveOfficer extends Employee {
    // 필드값은 변함없이 그대로 상속
    // super()사용 x, 메서드만 추가
    func() {
        console.log(`${this.name}`); // private는 상속 받는 거도 막기 때문에 상속 받는요소만큼은 허락해주려면 protected로 주면 됨
        console.log(`${this.age}`);
    }
}
export {};
// TS 접근 데어자
// public : 모든 범위에서 접근할 수 있는 제어자 설정 (*class를 생성 기본 세팅 된 default 제어자)
// private: 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
// protected : 클래스 내부 + 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정
//# sourceMappingURL=ClassExam01.js.map