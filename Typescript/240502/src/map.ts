export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = [...result, callback(value, i)];
  }
  return result;
};
// 제너릭 타입 = 어떤 타입 안에 들어가야 하는 타입 정해지지 않아서 종합적인 타입 정해줘야함
