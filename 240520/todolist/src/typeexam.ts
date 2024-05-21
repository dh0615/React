// TS 기본개념 !

// 1) 타입별칭 => 변수를 생성하듯이 간편하게 사용하고자 쓴다.
// 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성!!

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const user: User = {
  id: 1,
  name: "이다현",
  nickname: "dh0615",
  birth: "0000.00.00",
  bio: "안녕하세요",
  location: "서울시",
};

const user1: User = {
  id: 2,
  name: "폼폼푸린",
  nickname: "purin",
  birth: "0000.00.00",
  bio: "안녕하세요",
  location: "서울시",
};

// 타입 별칭 사용의 원래 목적?!
// 최초로 정의된 객체의 모습
// 동일한 패턴의 반복적인 타입을 먼저 정의해놔야함,, 아래처럼 써야됨~.~..
type ICountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // Brazil: string;
  [key: string]: string;
};

const CountryCodes = {
  Korea: "Ko",
  UnitedState: "US",
  Brazil: "BZ",
};

// type 별칭 vs interface
//=== 1) Interface => 상속 (extends)의 기능을 가지고 있음
// type은 상속의 기능을 가지고 있지 않음
// => 객체 지향 언어 : class

// type 별칭만의 장점 : union 타입을 활용해서 커스텀타입을 생성하는데 type별칭이 유연하다

//=== 2) type 호환성
// 슈퍼타입 & 서브타입

let num1: number = 10;
// 타입리터럴
let num2: 10 = 10;

// num1 = num2; // 이거는 되는데
// num2 = num1; // 이거는 안됨,,

interface Animal {
  name: string;
  color: string;
}

interface Dog {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "후추",
  color: "silver",
  breed: "푸들",
};

// 얼핏보면, dog > animal 객체 혹은 인터페이스 타입보다 더 많은 결과값을 가지고 있기 때문에 슈퍼타입..? >> xxx

// animal = dog; // 이거는 되는데..
// dog = animal; // 이거는 안됨

// 슈퍼타입이 될 수 있다는 것은 많은 값을 가지고 있다는 의미가 아님.. 다양한 타입들을 수용할 수 있는 상태여야한다.

// ==== 3) 초과 프로퍼티 검사
// 변수 안에 담긴 어떤 값 => 자바스크립트라는 프로그래밍 언어는 변수 안에 어떤 값이 담겨있으면 그 값을 꺼내서 검사!! => 그 과정에서 타입에 대한 검사도 같이 함
interface Book {
  name: string;
  price: number;
}

interface ProgrammingBook {
  name: string;
  price: number;
  skill: string;
}

// let book2: Book = {
//   name: "자바스크립트",
//   price: 33000,
//   skill: "react.js",
// }; 이렇게 하면 굳이 하지 않아도 되는 검사를 하면서 오류가 나옴.. 해결방법?? >> 초과 프로퍼티 검사를 벗어나야함..
// 그러면 아래와 같이 해주면 됨 ~.~

let programmingBook = {
  name: "자바스크립트",
  price: 33000,
  skill: "react.js",
};

let book2: Book = programmingBook;

let book = programmingBook;

const func = (book: Book) => {};

// func({
//   name: "자바스크립트",
//   price: 33000,
//   skill: "react.js",
// }); 초과 프로퍼티 검사 => 하나씩 끄집어내서 검증을 해줌 > 해당 요소를 별도의 변수에 할당하고 그 변수를 가져옴으로써 해결

func(programmingBook);

// === 4) 대수타입 (* 여러개의 타입을 합성해서 만드는 타입을 의미)
// - Union 타입 : 합집합 // 두가지요소를 합한 것을 의미
// - Intersection 타입 : 교집합

let a: number | string | boolean = 1;
a = "Hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog01 = {
  name: string;
  color: string;
};
// type dog는 중복돼서 못 쓰지만 interface Dog는 사용 가능
// interface Dog {
//   name: string;
//   color: string;
// }
// interface의 경우는 하나의 프로젝트 파일 내 동일한 이름을 갖고있는 타입정의가 있더라도 충돌되지 않음
// type별칭의 경우는 동일한 네임이 사용된 경우라면 재사용이 불가!!
// 하지만 쓰고 싶다면 아래처럼 쓰면 됨..
// const test = () => {
//   type Dog = {
//     name: string;
//     color: string;
//   };
// };

type Person01 = {
  name: string;
  language: string;
};

type Union1 = Dog01 | Person01;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
// union1, 2, 3모두 name을 가지고 있으니까 name이라고 되어있는애를 union4가 커버할 수 있는거 아닐까? 라고 생각할 수 있지만 아래처럼 쓰면 오류 남

// let union4: Union1 = {
//   name: "",
// };

type Intersection = Dog01 & Person01;

let union5: Intersection = {
  name: "",
  color: "",
  language: "",
};

// === 5) 타입단언 (* 단언 : 약속)
// - useState("") -> 클릭 등과 같은 이벤트 행위
// 리터럴 형식의 문자로 타입 바뀜
// [] => 약속 (* 단언) => 내부에 객체가 들어갈 배열의 타입으로 바뀔거야

// React.js 타입
// 1. 함수형 컴포넌트 : 매개변수 타입 => props  => 객체의 형태 => interface자세히 알아야
// 2. 반환값으로 type을 정의하는 것 => void 많이 씀
// 3. 고차함수 : type별칭을 활용해서 타입시그니처
// 4. 함수타입 : 매개변수로 들어와야하는 타입이 불분명할 때 제네릭형식 <>으로 타입 지정하는 것
// 5. 아직 결정되지는 않았지만 앞으로 이러한 타입이 될거야 ~~ = as 타입단언

// any

interface Person02 {
  name: string;
  age: number;
}
// 사용자가 어떤 버튼을 클릭한다면 아래의 빈 객체 안에 name, age값이 포함될 예정이다!!
// let person: Person02 = {}; 이렇게 하면 오류나니까 아래처럼 써주기
let person = {} as Person02;

person.name = "";
person.age = 23;

// 타입단언을 사용하기 위해서는 다음과 같은 조건!!
// value as type define
// value & type  => 슈퍼 및 서브타입 구조를 띄고 있어야함

let num4 = 10 as never;
let num5 = 10 as unknown;
// let num6 = 10 as string; 이거는 안됨
//  => 같은 형제요소만 아니면 슈퍼타입이나 서브타입 뭐가 와도 상관 x

// 좋지 않은 타입 정의 방법 : any
// 다중 타입 단언
// let num7
