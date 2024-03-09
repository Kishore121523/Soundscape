import { useState } from 'react';

const location = () => {
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);

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
      alert('Geolocation is not supported by this browser.');
    }
  };

  const successCallback = (position: GeolocationPosition) => {
    const fetchedLatitude = position.coords.latitude;
    const fetchedLongitude = position.coords.longitude;

    setLatitude(fetchedLatitude);
    setLongitude(fetchedLongitude);
  };

  const errorCallback = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      default:
        alert('An unknown error occurred.');
    }
  };

  return { latitude, longitude, getLocation };
};

export default location;
