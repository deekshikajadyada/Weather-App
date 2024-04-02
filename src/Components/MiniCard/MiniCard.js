import React, { useEffect, useState } from 'react'
import sun from '../../assets/Icons/sun.png'
import cloud from '../../assets/Icons/cloud.png'
import fog from '../../assets/Icons/fog.png'
import rain from '../../assets/Icons/rain.png'
import snow from '../../assets/Icons/snow.png'
import storm from '../../assets/Icons/storm.png'
import wind from '../../assets/Icons/windy.png'
import './MiniCard.css';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

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
    <div className='mini-card-container'>
      <p className='day'>{new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}</p>
      <hr />
      <div className='weather-icon-container'>
        <img src={icon} alt="forecast not available" className='weather-icon' />
      </div>
      <p className='temperature'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard;
