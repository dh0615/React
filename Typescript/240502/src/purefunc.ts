const pure = (a: number, b: number): number => {
  return a + b;
};

const impure = (array: number[]) => {
  array.push(1);
  array.splice(0, 1);
};

const global = 10;
const impure02 = (x: number): number => {
  return x + global;
};

// 배열 내부에서 사용할 수 있는 메서드 중에서 이런 불순함의 요건에 해당되는 함수들이 꽤나 많음
// sort, splice, fliter

// 선언형으로 배열의 주요 메서드를 사용하기 위해서 알고 있어야 하는 주요개념!! 깊은복사 && 얕은복사
