// 배열을 활용해서 반복적인 액션
const arr: string[] = ["Jack", "Mark", "Pompompurin"];
for (let name of arr) {
  console.log(name);
}

// 배열의 타입을 정의하는데, 배열 안에 들어가야하는 타입이 1가지의 종류가 아닌 경우, 배열 내 들어가야 하는 타입의 형태가 변환되는 경우
// 제네릭 타입은 꼭 배열에서 사용되는 것이 아니라 함수에서도 사용 가능하다
