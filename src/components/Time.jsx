import React, { useState, useEffect } from 'react';
import { timezoneInstance } from '../api/axios';
import '../styles/Time.css';

function Time({ coordinates, weather }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (coordinates) {
      timezoneInstance.get(`/get-time-zone?key=6E45992IM4VI&format=json&by=position&lat=${coordinates.lat}&lng=${coordinates.lon}`)
        .then(response => {
          setTime(response.data.formatted);
        })
        .catch(err => {
          setTime('Time not available');
        });
    }
  }, [coordinates]);

  return (
    <div className="time">
      <h2 className='city__name'>{weather ? weather.name : 'City'}</h2>
      <p className='current__data'>{time}</p>
    </div>
  );
}

export default Time;
