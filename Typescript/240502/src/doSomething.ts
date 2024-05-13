import { ResultType } from "./tuple";

// fetch() 공부 전에
// Promise객체 > 정상적인 외부 데이터를 수신할 수 있을 때 (try문) / 정상적으로 외부 데이터 수신이 불가할 때(catch 문)
// false, 왜 오류가 발생했는지 에러 메세지

const doSomething = (): ResultType => {
  try {
    throw new Error("Some erroe occurs...");
  } catch (e: unknown | any) {
    return [false, e.message];
  }
};
