import React, { useState } from "react";
import axios from "axios";
import Search from "./search_input/Search";
import WeatherInformation from "./weather_information/WeatherInformation";
import WeatherDetails from "./weather_details/WeatherDetails";
import Logo from "../assets/word-logo-white.svg";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8a4bfcf8a4718be22cd71c22b6ac82d7`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      setLocation("");
    }
  };

  return (
    <>
      <div className="logo-wrapper">
        <img className="logo" src={Logo} alt="Weather Wise Logo" />
      </div>
      <Search
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <div className="container">
        {data.weather && (
          <>
            <WeatherInformation
              name={data.name}
              icon={data.weather[0].icon}
              svg={data.weather[0].main}
              temperature={data.main.temp}
              description={data.weather[0].description}
            />

            <WeatherDetails
              feels={data.main.feels_like}
              humidity={data.main.humidity}
              wind={data.wind.speed}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
