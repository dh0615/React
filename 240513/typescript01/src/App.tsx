import React from "react";
import { styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="skyblue" bgColor="teal" />
      <Circle text="I'm here" bgColor="pink" />
    </div>
  );
}

export default App;
