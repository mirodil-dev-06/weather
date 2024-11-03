import React from 'react';
import '../styles/Info.css';

function Info({ weather }) {
  if (!weather) return null;

  return (
    <div className="info">
     <span className='info__item'> 
     <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3em"
      width="3em"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
    <h5>{weather.main.humidity}%</h5>
        <p className='info__humidity'>Humidity </p>
     </span>

     <span className='info__item'> 
     <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3em"
      width="3em"
    >
      <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    </svg>
    <h5>{weather.wind.speed} m/s</h5>
        <p className='info__humidity'>Wind Speed </p>
     </span>

     <span className='info__item'> 
     <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M12 1.38L9.14 12.06c-.34 1.04-.1 2.23.72 3.06a3.012 3.012 0 004.25 0c.79-.79 1.05-1.92.78-2.91m-.29-8.86l.62 2.33A7.99 7.99 0 0120 13c0 2.21-.89 4.21-2.34 5.65h-.01a.996.996 0 000 1.41c.39.39 1.03.39 1.42.01A9.969 9.969 0 0022 13c0-4.62-3.14-8.5-7.4-9.65m-5.2.01C5.15 4.5 2 8.4 2 13c0 2.76 1.12 5.26 2.93 7.07.39.38 1.02.38 1.41-.01a.996.996 0 000-1.41A7.95 7.95 0 014 13c0-3.35 1.94-6.14 4.79-7.35" />
    </svg>
    <h5>{weather.main.pressure} hPa</h5>
        <p className='info__humidity'>Pressure</p>
     </span>

     <span className='info__item'> 
     <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="3em"
      width="3em"
    >
      <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
    </svg>
    <h5>{Math.round(weather.visibility) / 1000} km</h5>
        <p className='info__humidity'>Visibility </p>
     </span>

    </div>
  );
}

export default Info;
