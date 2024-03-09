import React, { useState } from 'react';

interface LocationComponentProps {
  onLocationChange: (latitude: number, longitude: number) => void;
}

const LocationComponent: React.FC<LocationComponentProps> = ({ onLocationChange }) => {
  const [latitudeFetched, setlatitudeFetched] = useState<number|undefined>(undefined);
  const [longitudeFetched, setlongitudeFetched] = useState<number|undefined>(undefined);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const successCallback = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setlatitudeFetched(latitude);
    setlongitudeFetched(longitude);

    // Pass the location data to the parent component
    onLocationChange(latitude,longitude);
  };

  const errorCallback = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.error('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.error('The request to get user location timed out.');
        break;
    }
  };

  return (
    <div>
      <div>LocationComponent: {latitudeFetched} {longitudeFetched}</div>
      <button onClick={getLocation} className='py-2 bg-black text-white'>GetLocation</button>
    </div>
  )
};

export default LocationComponent;
