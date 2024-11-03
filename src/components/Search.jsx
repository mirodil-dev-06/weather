import { useState, useEffect } from "react";
import instance from '../api/axios';
import '../styles/Search.css';

function Search({ setWeather, setCoordinates }) {
  const [inputSearch, setInputSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (inputSearch.trim() !== '') {
      instance.get(`/weather?q=${inputSearch}&appid=4c999f7b527819e6bb09a8961b922d4c`)
        .then(response => {
          setWeather(response.data);
          setCoordinates({
            lat: response.data.coord.lat,
            lon: response.data.coord.lon
          });
          setError('');
        })
        .catch(err => {
          setWeather(null);
          setCoordinates(null);
          setError('City not found');
        });
    }
  }, [inputSearch, setWeather, setCoordinates]);

  return (
    <div className="search-container">
      <div className='search'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          type="text" 
          placeholder='Search for your preferred city...' 
          value={inputSearch} 
          onChange={e => setInputSearch(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;
