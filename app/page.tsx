'use client'

import React from 'react';
import WeatherComponent from '@/components/WeatherComp/WeatherComp';
import SpotifyRecommendations from '@/components/SpotifyComp/SpotifyComp';

const Home: React.FC = () => {

  return (
    <>
      <WeatherComponent />
    <div className='mx-8'>
      <SpotifyRecommendations />
    </div>
    </>
  );
};

export default Home;
