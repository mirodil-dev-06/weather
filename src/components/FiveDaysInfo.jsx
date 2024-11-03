import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaSmog, FaBolt, FaCloudShowersHeavy } from 'react-icons/fa';
import '../styles/FiveDaysInfo.css';

function FiveDaysInfo({ coordinates }) {
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (coordinates) {
            instance.get(`/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=4c999f7b527819e6bb09a8961b922d4c`)
                .then(response => {
                    const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
                    setForecast(dailyData);
                    setError('');
                })
                .catch(err => {
                    setForecast([]);
                    setError('Forecast not available');
                });
        }
    }, [coordinates]);

    const getWeatherIcon = (weatherCondition) => {
        switch (weatherCondition) {
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
            case 'drizzle':
                return <FaCloudShowersHeavy />;
            default:
                return <FaCloud />;
        }
    };

    return (
        <div className="weather__forecast">
            <h1 className='weather__forecast-title'>5 Days Forecast:</h1>
            {error && <p>{error}</p>}
            {forecast.length > 0 && forecast.map((item, index) => (
                <div key={index} className="weather__forecast-item">
                    <div className="weather__forecast-item__icon">
                        {getWeatherIcon(item.weather[0].main.toLowerCase())}
                    </div>
                    <strong>{Math.round(item.main.temp - 273.15)}°C</strong>
                    <b>{new Date(item.dt * 1000).toLocaleDateString()}</b>
                </div>
            ))}
        </div>
    );
}

export default FiveDaysInfo;
