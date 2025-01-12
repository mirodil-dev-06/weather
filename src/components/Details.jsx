import React from 'react';
import '../styles/Details.css';
import WeatherIcons from './WeatherIcons';
import Info from './Info';

function Details({ weather }) {
  if (!weather) return null;

  return (
    <div className="details">
      <div className="details__left-item">
      <h1 className='details__temp'>{Math.round(weather.main.temp - 273.15)}°C</h1>
      <p className='details__temp2'>Feels like: <span>{Math.round(weather.main.feels_like - 273.15)}°C</span></p>
      <span className='details__info'>
      <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="3em"
            width="3em"
          >
            <path d="M7.646 1.146a.5.5 0 01.708 0l1.5 1.5a.5.5 0 01-.708.708L8.5 2.707V4.5a.5.5 0 01-1 0V2.707l-.646.647a.5.5 0 11-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 01.707 0l1.414 1.414a.5.5 0 01-.707.707L2.343 5.05a.5.5 0 010-.707zm11.314 0a.5.5 0 010 .707l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM8 7a3 3 0 012.599 4.5H5.4A3 3 0 018 7zm3.71 4.5a4 4 0 10-7.418 0H.499a.5.5 0 000 1h15a.5.5 0 000-1h-3.79zM0 10a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 010 10zm13 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" />
          </svg>
        <div>
        <h2>Sunrise</h2>
        <p>         
          {weather ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString() : '8:00'}
        </p>
        </div>
       
      </span>
      <span className='details__info'>
      <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="3em"
      width="3em"
    >
      <path d="M7.646 4.854a.5.5 0 00.708 0l1.5-1.5a.5.5 0 00-.708-.708l-.646.647V1.5a.5.5 0 00-1 0v1.793l-.646-.647a.5.5 0 10-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 01.707 0l1.414 1.413a.5.5 0 01-.707.707L2.343 5.05a.5.5 0 010-.707zm11.314 0a.5.5 0 010 .706l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM8 7a3 3 0 012.599 4.5H5.4A3 3 0 018 7zm3.71 4.5a4 4 0 10-7.418 0H.499a.5.5 0 000 1h15a.5.5 0 000-1h-3.79zM0 10a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 010 10zm13 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" />
    </svg>
        <div>
        <h2>Sunset</h2>
        <p>         
          {weather ? new Date(weather.sys.sunset * 1000).toLocaleTimeString() : '8:00'}
        </p>
        </div>
       
      </span>
      </div>
      <div className="details__meddle-item">
      <WeatherIcons weather={weather} />
      </div>
    <div className="details__right-item">
    <Info weather={weather} />
    </div>
    </div>
  );
}

export default Details;
