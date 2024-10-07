import React from 'react'
import './galllery.css'
function Gallery({images}) {
  return (
    <>
    <div className='galleries'>
        <div className='gallery-cards'>
        {images.map((imgsrc,index)=>{
            return(
            <div className='gallery-card' key={index}>
                <img src={imgsrc} alt={`gallery ${index+1}`} />
            </div>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Gallery