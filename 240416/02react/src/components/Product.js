import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  // q라는 키값에 매칭되어진 value값을 찾아서 console창에 출력하라는 뜻 = Home.js에서 navigate("/product?q=pants");라고 썼기 때문에 pants가 콘솔창에 출력됨
  return <div>Product All</div>;
};

export default Product;
