import React from "react";
import { Button } from "react-bootstrap";

const WeatherBtn = ({ cities, setCity, handleCityChange }) => {
  return (
    <div className="weatherButton">
      <Button onClick={() => handleCityChange("current")} variant="warning">
        Current Location
      </Button>
      {cities.map((it, idx) => (
        <Button onClick={() => setCity(it)} key={idx}>
          {it}
        </Button>
      ))}
    </div>
  );
};
console.log(WeatherBtn);

export default WeatherBtn;
