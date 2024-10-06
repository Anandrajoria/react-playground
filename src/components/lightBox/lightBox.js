import React from 'react'
import './lightbox.css'

function LightBox({
  title='drawer title-small',
  heading='this is owners content',
  para='Lore.sapiente omnis quos nam Lorem ipsum lorem dolor sit amet consectetur adipisicing elit. Cupiditate, quibusdam magnam blanditiis a esse similique, ipsam non tempora, itaque soluta quas est culpa aut! Earum ipsum itaque nesciunt nisi possimus.voluptates id dolore animi optio excepturi inventore, vel cumque suscipit neque fuga enim? Pariatur qui harum similique aspernatur tempora ea. Lorem ',
  btn1='Cancel',
  btn2='Submit'
}) {
  return (
    <div className='sidebar'>
      <div className='head'>
        <div className='Dtitle'>{title}</div>
        <div className='secHead'>
          <div></div>
          <div></div>
          <div className='first'><i class="fa-solid fa-ellipsis-vertical"></i></div>
          <div className='sec'><i class="fa-solid fa-xmark"></i></div>
        </div>
      </div>

      <div className='divide'></div>
      
    <div className='cont'>
      <h2>{heading}</h2>
      <p>{para}
      </p>
    </div>

      <div className='divide2'></div>

      <div className='btnn'>
        <button>{btn1}</button>
          <button>{btn2}</button>
      </div>
    </div>
  )
}

export default LightBox