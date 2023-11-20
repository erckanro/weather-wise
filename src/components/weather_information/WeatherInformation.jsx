import React, { useEffect, useState } from "react";

const WeatherInformation = ({ name, svg, temperature, description }) => {
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const iconModule = await import(`./../../assets/${svg}.svg`);
        setWeatherIcon(iconModule.default);
      } catch (error) {
        console.error(`Error importing SVG for ${svg}:`, error);
        // Handle the error or provide a default SVG
      }
    };

    importIcon();
  }, [svg]);

  return (
    <div className="top">
      <div className="location">
        <p>{name}</p>
        {weatherIcon && (
          <img
            src={weatherIcon}
            style={{ width: "100px" }}
            alt="Weather Icon"
          />
        )}
      </div>
      <div className="temp">
        <h1>{temperature.toFixed()} °C</h1>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default WeatherInformation;
