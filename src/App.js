import React, { useState } from 'react';
import { BackgroundLayout, WeatherCard, MiniCard } from './Components/Index-Data'; // Correct import path
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { useStateContext } from './Components/Context';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // Changed variable name to camelCase
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    if (input.trim() !== '') {
      setPlace(input.trim());
      setInput('');
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      submitCity();
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="app-title">Weather-Wisepod</h1>
        <div className="search-bar">
          <TextField
            label='Search cities'
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleKeyUp}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon onClick={submitCity} style={{ cursor: 'pointer' }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className="main-content">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="mini-cards-container">
          {values?.slice(1, 7).map(curr => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
