interface IPerson {
  name: string;
  age: number;
}

// 템플릿 리터럴: 문자 => 변수를 문자열로 찾아와서 값을 사용하고자 할 때
//리터럴 타입: 문자타입
// 타입정의 : 주석처리
// 숫자 : number, 문자: string
// 타입에 대한 추론이 가능 : 추론 : "hello" => 타입정의 -> 문자
// 변수 안에 담기는 value값을 가지고 타입을 추론할 때, 리터럴 타입이 작동됐다고 이야기함
// 타입구조도
// 슈퍼타입 <-> 서브타입
// number: 슈퍼타입
// 10: 서브타입

// const makePerson = (name: string, age: number = 10): IPerson => {
//   const person = {
//     name: name,
//     age: age,
//   };
//   return person;
// };을 표현식문으로 바꾸려면..

const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});

console.log(makePerson("Mark"));
console.log(makePerson("Mark", 26));
