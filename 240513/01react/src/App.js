import { keyframes, styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 8px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Text = styled.span`
//   color: #fff;
// `;

// const Circle = styled(Box)`
//   border-radius: 100px;
// `;
// // 기존에 있는 박스 컴포넌트 그대로 상속 받아서 Circle에 주겠다

// const Btn = styled.button`
//   background-color: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 14px;
//   width: 100px;
//   height: 50px;
//   text-decoration: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 16px;
// `;

// const Input = styled.input.attrs({ required: true })`
//   background-color: tomato;
// `;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius : 0px;
} 
50% {
  transform: rotate(360deg);
  border-radius : 200px;
}
100%{
  transform: rotate(0deg);
  border-radius : 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    transition: all 0.3s;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      {/* <Box>
        <Text>Hello</Text>
      </Box>
      <Circle/> */}
      {/* <Btn>Log in..</Btn>
      <Btn as="a" href="https://www.naver.com">
        Log Out..
      </Btn> */}
      {/* <Input />
      <Input />
      <Input />
      <Input /> */}
      <Box>
        <Emoji>🍥</Emoji>
      </Box>
      <Emoji>👽</Emoji>
    </Container>
  );
}

export default App;
