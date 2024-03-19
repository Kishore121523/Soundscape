import { useEffect, useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from "../config";

interface WeatherProps {
  latitude: number | undefined;
  longitude: number | undefined;
}

const Weather = ({ latitude, longitude }: WeatherProps) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (latitude !== undefined && longitude !== undefined) {
          const apiKey = WEATHER_API_KEY;
          const apiUrl = `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return { weatherData };
};

export default Weather;
