'use client'

import React, { useState } from 'react';
import WeatherComponent from '@/components/WeatherComp';
import LocationComp from '@/components/LocationComp';
import SpotifyRecommendations from '@/components/MediaPlayer/Spotify';

const Home: React.FC = () => {
  // TODO: Move this logic to client side rendering
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const handleLocationChange = (lat: number, lon: number) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div className="py-5">
        <LocationComp onLocationChange={handleLocationChange}></LocationComp>
      </div>
      <div className="py-5">
        <WeatherComponent latitude={latitude} longitude={longitude} />
      </div>
      <div className='py-5'>
      <SpotifyRecommendations />
      </div>
    </div>
  );
};

export default Home;
