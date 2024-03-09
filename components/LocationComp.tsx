import React, { useState } from 'react';
import location from '@/lib/location/location';

interface LocationComponentProps {
  onLocationChange: (latitude: number|undefined, longitude: number|undefined) => void;
}

const LocationComponent: React.FC<LocationComponentProps> = ({ onLocationChange }) => {

  // Get location button click
  const { latitude, longitude, getLocation } = location();
  onLocationChange(latitude,longitude);

return (
    <div>
      <div>LocationComponent: {latitude} {longitude}</div>
      <button onClick={getLocation} className='py-2 bg-black text-white'>GetLocation</button>
    </div>
  )
};

export default LocationComponent;
