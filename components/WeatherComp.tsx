import React, { useEffect, useState } from 'react';

interface OpenWeatherComponentProps {
  latitude: number|undefined;
  longitude: number|undefined;
}

const OpenWeatherComponent: React.FC<OpenWeatherComponentProps> = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const apiKey = '924adec96ff9627b3a92489b6931c476';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData && (
        <pre>{weatherData.cod =='200' && JSON.stringify(weatherData, null, 2)}</pre>
      )}
    </div>
  );
};

export default OpenWeatherComponent;
