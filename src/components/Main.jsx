import React, { useState, useEffect } from 'react';
import Time from './Time';
import '../styles/Main.css';
import Details from './Details';
import FiveDaysInfo from './FiveDaysInfo';
import MapComponent from './MapComponent';

function Main({ weather }) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (weather) {
      console.log(weather); // API natijalarini ko'rish uchun
      setCoordinates({
        lat: weather.coord.lat,
        lon: weather.coord.lon
      });
    }
  }, [weather]);

  return (
    <div className='main'>
      <Time coordinates={coordinates} weather={weather} />
      <Details weather={weather} />
      <FiveDaysInfo coordinates={coordinates} />
      <MapComponent coordinates={coordinates}/>
    </div>
  );
}

export default Main;
