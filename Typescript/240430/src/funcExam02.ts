// 타입 별칭 =>  함수타입 시그니처 대체 목적
type stringNumberFunc = (arg0: string, arg1: number) => void;

const f: stringNumberFunc = function (a, b) {};
const g: stringNumberFunc = (c, d) => {};
