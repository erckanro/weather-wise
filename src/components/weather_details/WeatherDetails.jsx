import React from "react";
import WeatherDetailsTemplate from "./components/WeatherDetailsTemplate";

const WeatherDetails = ({ feels, humidity, wind }) => {
  const weatherDetailsData = {
    feels: { label: "Feels Like", value: feels, unit: "°C" },
    humidity: { label: "Humidity", value: humidity, unit: "%" },
    wind: { label: "Wind Speed", value: wind, unit: "MPH" },
  };

  return (
    <div className="bottom">
      {Object.entries(weatherDetailsData).map(([key, data]) => (
        <WeatherDetailsTemplate
          key={key}
          className={key}
          label={data.label}
          value={data.value}
          unit={data.unit}
        />
      ))}
    </div>
  );
};

export default WeatherDetails;
