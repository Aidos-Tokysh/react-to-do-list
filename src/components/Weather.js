import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '9f3fb273945f01d2619192714d682b36';
  const CITY = 'Almaty';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(result.data);
    };
    fetchData();
  }, [API_KEY, CITY]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};
export default Weather;