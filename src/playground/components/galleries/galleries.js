import React from 'react'
import Gallery from '../../../components/gallery/gallery'
function Galleries() {
    const images=['1.jpg','5.jpg','4.jpg']
  return (
    <>
        <Gallery images={images}/>
    </>
  )
}

export default Galleries