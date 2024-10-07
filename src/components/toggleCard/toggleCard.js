import React from 'react'
import { useState } from 'react';
import './toggleCard.css'

function ToggleCard({
  heading='Tougher then before smarter then ever',
  imgsrc='Kimetsu.jpg',
  subTitle='This is sub title',
  para='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit saepe dolores accusamus alias consectetur quaerat, quasia!',
  btn1='Reserve Now',
  btn2='Learn More'
}) {

  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsZoomed(true);
  };

  const handleOutsideClick = () => {
    setIsZoomed(false);
  };
  return (

      <div className={`case ${isZoomed ? 'blur' : ''}`} onClick={handleOutsideClick}>
      <div className={`cartoon ${isZoomed ? 'zoomed' : ''}`} onClick={handleClick}>
        <div className='actor'>
          <img src={imgsrc} alt="zanitsu" />
        </div>

        <div className='jankari'>
          <h2>{heading}</h2>
          <span className='subTitle'>{subTitle}</span>
          <p>{para}</p>

          <div className='btns'>
            <button>{btn1}</button>
            <button>{btn2}</button>
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default ToggleCard

