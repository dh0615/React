import React from "react";
import Router from "./Router";
import { createGlobalStyle } from "styled-components"; // 스타일 컴포넌트를 사용할 때 reset css만들어줌
import { ReactQueryDevtools } from "react-query/devtools";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
*{
  margin : 0;
  padding: 0;
  box-sizing : border-box
}
body {
  font-family: "Source Sans 3", sans-serif;
  background-color : ${(props) => props.theme.bgColor};
  color : ${(props) => props.theme.textColor}
}

li {
  list-style: none;
}
a{
  text-decoration : none;
  color: inherit;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
