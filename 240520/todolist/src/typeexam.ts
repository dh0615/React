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
