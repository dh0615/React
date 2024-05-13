// 1~100까지의 숫자를 더하는 코드를 작성 (*선언형 방식으로..)
// 숫자를 생성하는 함수를 선언, 생성
// 생성된 숫자를 더하는 함수를 선언하고 생성해야함 = fold()

import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101); // 마지막 매개변수는 하나 작은거까지 찾아오니까
const result = fold(numbers, (result, value) => result + value, 0);
console.log(result);
