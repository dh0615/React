import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const App01 = () => {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          type="text"
          placeholder="user name"
          onChange={onChange}
        />
      </form>
    </Container>
  );
};

export default App01;
