import React from "react";

const Body = () => {
  const num = 19;
  // 조건연산자
  if (num % 2 === 0) {
    return <div>{num}은(는) 짝수입니다.</div>;
  } else {
    return <div>{num}은(는) 홀수입니다.</div>;
  }
  // 삼항조건연산자
  // {num}은(는) {num % 2 === 0? "짝수" : "홀수"}입니다.
};

export default Body;
