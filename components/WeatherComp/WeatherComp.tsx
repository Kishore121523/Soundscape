import React from 'react';
import Weather from '@/lib/weather/weather';
import Location from '@/lib/location/location';

const WeatherComp = () => {
  // Getting Lat and Long 
  const { latitude, longitude, getLocation } = Location();
  const handleGetLocation = () => {
    getLocation();
  };
  
  // Getting Weather using Lat and Long
  const { weatherData } = Weather({ latitude, longitude });
  // console.log(JSON.stringify(weatherData, null ,2))

  return (
    <div>
      <h2>Weather Information</h2>
      <button onClick={handleGetLocation} className='py-2 bg-black text-white'>Get Weather</button>

    {weatherData && weatherData.cod === 200 && (
      <div>
        <h3>Weather in {weatherData.name}</h3>
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>Temperature Min: {weatherData.main.temp_min} °C</p>
        <p>Temperature Max: {weatherData.main.temp_max} °C</p>
        <p>Feels Like: {weatherData.main.feels_like} °C</p>
        <p>Condition: {weatherData.weather[0].main}</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Rain: {weatherData.weather[0].main == "Rain"?weatherData.rain:"No Rain"}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s, Direction: {weatherData.wind.deg}°</p>
      </div>
    )}

    </div>
  );
};

export default WeatherComp;
