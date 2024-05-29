const API_KEY = "974e38e70f70aeeedd29ecb7af141145";
const BASE_PATH = "https://api.themoviedb.org/3";

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key${API_KEY}`).then(
    (response) => response.json()
  );
};
