import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetmoviesResult, IGetGenresResult, getGenres } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const SearchBox = styled.div`
  padding: 100px;
  display: flex;
  img {
    width: 800px;
    margin-right: 20px;
  }
`;

const SearchTitle = styled.div`
  font-size: 42px;
  background-color: ${(props) => props.theme.red};
  border-radius: 14px 0 14px 0;
`;

const SearchOverview = styled.p`
  font-size: 18px;
  margin: 10px 0;
  margin-bottom: 32px;
  padding: 18px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const SearchDate = styled.div`
  font-size: 18px;
  span {
    width: 100px;
    display: inline-block;
    background-color: #ffa300;
    text-align: center;
    color: ${(props) => props.theme.balck.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchValue = styled.div``;

const SearchPoint = styled.div``;

const SearchGenres = styled.div``;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const API_KEY = "974e38e70f70aeeedd29ecb7af141145";
  const BASE_PATH = "https://api.themoviedb.org/3";

  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/multi?query=${keyword}&api_key=${API_KEY}&language=ko-kr&page=1`
    ).then((response) => response.json());
  };

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetmoviesResult>(["movies", keyword], searchedMovies);

  const { data: genreData, isLoading: genreLoading } =
    useQuery<IGetGenresResult>(["getGenres"], getGenres);

  return (
    <div>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        movieData?.results.map((movie, index) => (
          <SearchBox key={index}>
            <img src={makeImagePath(movie.backdrop_path)}></img>
            <div>
              <SearchTitle>
                {movie.title} {movie.name}
              </SearchTitle>
              <SearchOverview>{movie.overview}</SearchOverview>
              <SearchDate>
                <span>개봉일 / 첫방영일</span>
                {movie.release_date}
                {movie.first_air_date}
              </SearchDate>
              <SearchValue>
                <span>관람등급</span>
                {movie.adult ? "청소년관람불가" : "전체관람가"}
              </SearchValue>
              <SearchPoint>
                <span>영화평점</span>
                {movie.vote_average.toFixed(2)}(
                {movie.vote_count.toLocaleString("ko-kr")}명 투표 참여)
              </SearchPoint>
              <SearchGenres>
                {movie.genre_ids
                  .map(
                    (id) =>
                      genreData?.genres.find((item) => item.id === id)?.name
                  )
                  .filter((name) => name)
                  .join(",")}
              </SearchGenres>
            </div>
          </SearchBox>
        ))
      )}
    </div>
  );
};

export default Search;
