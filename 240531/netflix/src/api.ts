const API_KEY = "974e38e70f70aeeedd29ecb7af141145";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  title: string;
  name: string;
  overview: string;
  first_air_date: string;
  release_date: string;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  backdrop_path: string;
  poster_path: string;
}

export interface IGetmoviesResult {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IGenre {
  id: number;
  name: string;
}

export interface IGetGenresResult {
  genres: IGenre[];
}

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};

export const getGenres = () => {
  return fetch(
    `${BASE_PATH}genre/movie/now_playing?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};
