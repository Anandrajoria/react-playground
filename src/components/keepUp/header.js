import React from 'react'

function Header() {
  return (
    <>
        <div className='play_header'>
            <div className='play_keep'>
              <img src="https://imgs.search.brave.com/QrxrGC5oRBmYBMDRGI7epsVB406IgjooApaWM1r1bWI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2dvb2ds/ZS1rZWVwMzMxNi5q/cGc" alt="keep up logo" />
                <i><a href="keep">keep</a></i>
            </div>
            <div>
                <input type="text" placeholder='search' className='play_input'/>
            </div>
        </div>
    </>
  )
}

export default Header