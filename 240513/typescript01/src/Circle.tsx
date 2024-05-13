import React, { useState } from "react";
import { Interface } from "readline";
import { styled } from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 6px solid ${(props) => props.borderColor};
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string; // optional property 줘서 값 받은 애만 스타일 적용할 수 있도록 하기 위해서 borderColor? 서줌
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  ); // borderColor 값이 존재하면 주고 아니면 bgColor를 주라고 하기 위해서 ?? 쓴 것
};

export default Circle;
