export const filter = <T>(
  array: T[], // 검사해야하는 것 첫번째 매개변수
  callback: (value: T, index?: number) => boolean // 검사 해주는 것 두번째 매개변수
): T[] => {
  let result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (callback(value, i)) result = [...result, value];
  }
  return result;
};
