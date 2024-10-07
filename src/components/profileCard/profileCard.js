import React from 'react'
import './profile.css'
function ProfileCard() {
  return (
    <>
    <div className='Main'>
    <div className='Card'>
            <img src="Kimetsu.jpg" alt="" />
            <div className='info'>
                <span className='name'>aditya</span>
                <span className='role'>web developer</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ab facilis. Ad minima dolores quam deleniti corporis, ipsum ullam expedita quisquam tempora ratione quaerat deserunt rerum et beatae voluptatum eius!
            </p>
        </div>
    </div>
    </>
  )
}

export default ProfileCard