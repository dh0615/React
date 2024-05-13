export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
//  ...range(from + 1, to)라는 재귀함수를 사용해서 반복적으로 진행되도록 해줌
