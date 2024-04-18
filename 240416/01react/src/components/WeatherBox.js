import React from "react";

const cityName = (city) => {
  switch (city) {
    case "Paris":
      return "파리";
    case "New York":
      return "뉴욕";
    case "Tokyo":
      return "도쿄";
    case "Seoul":
      return "서울";
    case "Jamwon-dong":
      return "잠원동";
  }
};

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weatherBox">
      <h2>도시명 : {weather?.name && cityName(weather.name)}</h2>
      <h2>
        온도 : {weather?.main.temp}℃ / 습도 : {weather?.main.humidity}%
      </h2>
      <h3>현재날씨 : {weather?.weather[0].description}</h3>
    </div>
  );
};
/* 그냥 weather 쓰니까 오류남..
앞에있는 값이 참인 경우 기다렸다가 뒤의 값을 가져와라
비동기 처리방식으로 데이터를 가져오기 때문에 단락회로평가, ?를 붙여서 weather?라고 써줌 */

export default WeatherBox;
