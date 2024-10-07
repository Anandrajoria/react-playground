import React from 'react'
import { Carousel } from '../../../components/carousel'
function Coursels() {
    const images=['1.jpg','2.jpg','3.jpg','4.jpg','6.jpg','7.jpg','8.jpg','9.jpg']
  return (
    <div>
        <Carousel images={images}/>
    </div>
  )
}

export default Coursels