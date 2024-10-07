import React from 'react'
import './style.css';
function SimplePage() {
  return (
    <div>
        <div className="container">
        <div className="box">
            <img src="annie-spratt-fbAnIjhrOL4-unsplash.jpg" alt="Image" className="image"/>
            <span className="design">Design</span>
            <h1 className="title">Embracing Minimalism</h1>
            <p className="description">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
            <div className="divider"></div>
            <span className="tag">Annie Spratt</span>
        </div>
    </div>
    </div>
  )
}

export default SimplePage