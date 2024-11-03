import React from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaSmog, FaBolt } from 'react-icons/fa';
import '../styles/WeatherIcons.css';

function WeatherIcons({ weather }) {
  if (!weather) return null;

  const weatherCondition = weather.weather[0].main.toLowerCase();
  console.log(weatherCondition); // Bu yerda weatherCondition qiymatini ko'rib chiqamiz

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'clear':
        return <FaSun />;
      case 'clouds':
        return <FaCloud />;
      case 'rain':
        return <FaCloudRain />;
      case 'snow':
        return <FaSnowflake />;
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'dust':
      case 'fog':
      case 'sand':
      case 'ash':
      case 'squall':
      case 'tornado':
        return <FaSmog />;
      case 'thunderstorm':
        return <FaBolt />;
      default:
        return <FaCloud />;
    }
  };

  return (
    <div className="weather-icon">
      {getWeatherIcon(weatherCondition)}
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherIcons;
