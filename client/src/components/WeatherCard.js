import React from "react";
import { Cloud, Thermometer, Wind, Droplet } from "react-feather";

const WeatherCard = ({ weatherData }) => {
  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind: { speed },
    sys: { country },
    clouds: { all: cloudiness },
  } = weatherData;

  return (
    <div className="card w-100 w-md-75 mx-auto shadow-lg mt-4 p-4 rounded">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="card-title display-5 mb-2">{name}, {country}</h2>
            <p className="card-text text-muted">{weather[0].description}</p>
          </div>
          <Cloud className="h1 text-primary" />
        </div>

        <div className="row">
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <Thermometer size={20} className="text-danger" />
              <span className="ml-2">Temp: {temp.toFixed(1)}°C</span>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <Thermometer size={20} className="text-warning" />
              <span className="ml-2">Feels like: {feels_like.toFixed(1)}°C</span>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <Droplet size={20} className="text-info" />
              <span className="ml-2">Humidity: {humidity}%</span>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <Wind size={20} className="text-secondary" />
              <span className="ml-2">Wind: {speed} m/s</span>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="d-flex align-items-center">
              <span>Pressure: {pressure} hPa</span>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="d-flex align-items-center">
              <span>Clouds: {cloudiness}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
