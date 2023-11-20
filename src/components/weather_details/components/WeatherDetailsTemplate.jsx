import React from "react";

const WeatherDetailsTemplate = ({ className, label, value, unit }) => {
  return (
    <div className={` ${className} weather-info `}>
      <p className="bold">
        {value.toFixed()} {unit}
      </p>
      <p>{label}</p>
    </div>
  );
};

export default WeatherDetailsTemplate;
