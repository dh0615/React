import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import catImage from "../assets/ggompang.jpeg";

const Wrapper = styled.div``;
const Header = styled.div``;
const Contents = styled.div``;
const Title = styled.div``;
const LogoImage = styled.div``;
const Desc = styled.div``;
const Button = styled.button``;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header></Header>
      <Contents>
        <Title></Title>
        <LogoImage>
          <img
            className="rounded-circle"
            width={350}
            height={350}
            src={catImage}
            alt="catImage"
          />
        </LogoImage>
        <Desc></Desc>
        <Button onclick={handleClickButton}></Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
