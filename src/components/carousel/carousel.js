import React from 'react'
import './coursel.css'
function Carousel({images}) {
  return (
    <>
        <section className='courousel-main'>
            <div className='coursel'>
                
            {images.map((imgsrc,index)=>{
            return(
            <div className='coursel-card' key={index}>
                <img src={imgsrc} alt={`gallery ${index+1}`} />
            </div>
            )
        })}
                
            </div>
        </section>
    </>
  )
}

export default Carousel