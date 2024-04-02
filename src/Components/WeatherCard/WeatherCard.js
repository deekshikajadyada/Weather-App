import React, { useEffect, useState } from 'react'
import useDate  from '../../utils/useDate'
import sun from '../../assets/Icons/sun.png'
import cloud from '../../assets/Icons/cloud.png'
import fog from '../../assets/Icons/fog.png'
import rain from '../../assets/Icons/rain.png'
import snow from '../../assets/Icons/snow.png'
import storm from '../../assets/Icons/storm.png'
import wind from '../../assets/Icons/windy.png'
import './WeatherCard.css';

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  return (
    <div className='weather-card-container'>
      <div className='weather-info'>
        <img src={icon} alt="weather_icon" className='weather-icon' />
        <p className='temperature'>{temperature} &deg;C</p>
      </div>
      <div className='location'>{place}</div>
      <div className='date-time'>
        <p className='current-date'>{new Date().toDateString()}</p>
        <p className='current-time'>{time}</p>
      </div>
      <div className='additional-info'>
        <p className='wind-speed'>Wind Speed: <p>{windspeed} km/h</p></p>
        <p className='humidity'>Humidity: <p>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='heat-index'>
        <p className='heat-index-label'>Heat Index</p>
        <p className='heat-index-value'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='divider' />
      <div className='conditions'>{conditions}</div>
    </div>
  )
}

export default WeatherCard
