'use client'

import React, { useState } from 'react';
import WeatherComponent from '@/components/WeatherComp/WeatherComp';
import SpotifyRecommendations from '@/components/MediaPlayer/Spotify';

const Home: React.FC = () => {

  return (
    <div>
      <h1>Weather App</h1>

      <div className="py-5">
        <WeatherComponent />
      </div>

      <div className='py-5'>
      <SpotifyRecommendations />
      </div>
    </div>
  );
};

export default Home;
