import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Main from './components/Main';
import instance from './api/axios';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (coordinates) {
      instance.get(`/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=4c999f7b527819e6bb09a8961b922d4c`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(err => {
          console.error('Error fetching weather data', err);
        });
    }
  }, [coordinates]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleTheme} className="theme-switch">
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </button>
        <Search setWeather={setWeather} setCoordinates={setCoordinates} />
      </header>
      <Main weather={weather} coordinates={coordinates} />
    </div>
  );
}

export default App;
