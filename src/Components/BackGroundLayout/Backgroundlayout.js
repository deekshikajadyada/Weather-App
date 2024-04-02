import React, { useEffect, useState } from 'react';
import Clear from '../../assets/Images/Clear.jpg';
import Fog from '../../assets/Images/fog.png';
import Cloudy from '../../assets/Images/Cloudy.jpg';
import Rainy from '../../assets/Images/Rainy.jpg';
import Snow from '../../assets/Images/Snow.jpg';
import Stormy from '../../assets/Images/Stormy.jpg';
import Sunny from '../../assets/Images/Sunny.jpg';
import { useStateContext } from '../Context/index'; 
import './Backgroundlayout.css';

const BackgroundLayout = () => {
  const [image, setImage] = useState(Clear);
  const { weather } = useStateContext(); 

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
   
      <img src={image} alt="weather_image" className="background-image" />
   
  );
};

export default BackgroundLayout;
