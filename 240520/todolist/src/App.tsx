import React from "react";
import { createGlobalStyle } from "styled-components";
import Todolist from "./Components/Todolist";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Source Sans 3", sans-serif;
  }
  ul, li {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Todolist />
    </>
  );
}

export default App;
