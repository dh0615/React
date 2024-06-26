import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { motion, AnimatePresence } from "framer-motion";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import Modal from "./Modal";

const Wrapper = styled.div`
  background: #000;
  height: 100%;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const OverView = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  position: relative;
  background-color: #fff;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 30px;
  &:first-child {
    transform-origin: center;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: ${(props) => props.theme.black.lighter};
  padding: 20px;
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: { x: -window.outerWidth - 10 },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    zIndex: 99,
    scale: 1.3,
    y: -50,
    transition: { delay: 0.3, type: "tween" },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.3, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  // false = leaving 완료 / true = leaving 중..
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      // setLeaving(true);
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading... </Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, index * offset + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      variants={boxVariants}
                      initial="normal"
                      transition={{ type: "tween" }}
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
              {/* <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row> */}
              {/* <Row>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </Row> */}
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
};

export default Home;

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
// 이미지 사이즈 그 자체로 보는 법
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
