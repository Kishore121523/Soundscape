'use client'
import React, { useEffect, useState } from 'react';
import Weather from '@/lib/weather/weather';
import Location from '@/lib/location/location';
import Spinner from '../UI/Spinner';
import WeatherInfo from '../UI/WeatherInfo';
import { useAppState } from '@/app/AppStateContext';


const WeatherComp = () => {
  const [btnClicked,setbtnClicked] = useState<any>(false);
  const [loading, setLoading] = useState(false);
  const { loaded, setLoaded } = useAppState();

  const { latitude, longitude, getLocation } = Location();

  const handleGetLocation = () => {
    setLoading(true);
    getLocation();
    
    setTimeout(() => {
      setLoaded(true);
    }, 2500);

    setbtnClicked(true);
  };
  
  const { weatherData } = Weather({ latitude, longitude });
  // console.log(JSON.stringify(weatherData, null ,2))

  useEffect(() => {
    let timer: any;

    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);  
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div>
      {!btnClicked && 
      <div className={"weatherComp-container flex justify-center items-center z-3"}>
        <div className="button-container-1">
          <span className="mas">Escape</span>
          <button onClick={handleGetLocation}  id='work' type="button" name="Hover">Escape</button>
        </div>
      </div>
      }

      {btnClicked && loading && (
        <div className={"weatherComp-container flex justify-center items-center"}>
          <Spinner />
        </div>
      )}

      {btnClicked && !loading  &&  weatherData && weatherData.cod === 200 && (
        <WeatherInfo 
          city={weatherData.name} 
          temp={weatherData.main.temp} 
          temp_min={weatherData.main.temp_min} 
          temp_max={weatherData.main.temp_max} 
          feels_like={weatherData.main.feels_like} 
          condition={weatherData.weather[0].main} 
          description={weatherData.weather[0].description} 
          rain={weatherData.rain} 
          humidity={weatherData.main.humidity} 
          windSpeed={weatherData.wind.speed} 
          windDirection={weatherData.wind.deg} 
          classes={loaded ? 'loaded' : ''}
        />
      )}
      
    </div>
  );
};

export default WeatherComp;
