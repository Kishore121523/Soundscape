import React from 'react'

interface WeatherInfoProps {
  city: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  condition: string;
  description: string;
  rain: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ city, temp, temp_min, temp_max, feels_like, condition, description,rain,humidity,windSpeed,windDirection }) => {
  return (
      <div className='m-4 p-4 flex flex-col items-center bg-[#3f3e3e] text-white rounded-md'>
          <h3>Weather in {city}</h3>
          <p>Temperature: {temp} °C</p>
          <p>Temperature Min: {temp_min} °C</p>
          <p>Temperature Max: {temp_max} °C</p>
          <p>Feels Like: {feels_like} °C</p>
          <p>Condition: {condition}</p>
          <p>Description: {description}</p>
          <p>Rain: {condition == "Rain"? rain :"No Rain"}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} m/s, Direction: {windDirection}°</p>
        </div>
  )
}

export default WeatherInfo
