import React, { useState, useEffect } from "react";
import WeatherCard from "../../client/src/components/WeatherCard";
import SearchBar from "../../client/src/components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetch(`http://localhost:3522/weather?city=${city}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch weather data");
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="min-vh-100 bg-primary text-white d-flex flex-column justify-content-center align-items-center py-5">
      <h1 className="display-4 font-weight-bold mb-4 text-center">
        Weather Dashboard
      </h1>
      <SearchBar onSearch={setCity} />
      {loading && <div className="text-center">Loading weather data...</div>}
      {error && <div className="text-center text-danger">Error: {error}</div>}
      {weatherData && !loading && !error ? (
        <WeatherCard weatherData={weatherData} />
      ) : null}
    </div>
  );
};

export default App;
