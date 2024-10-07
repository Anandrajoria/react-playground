import React from 'react'
import './list'
function List2({
    list_title='title one',
    list_para='pakshdfans ajsdl aajsfd dsfjasm jiasdv ajsvajsdv asijdv asj dv asdb vaj djn asjfjsflkjosffasjfiu sfsijfpa isfi SFIJsif  KJSFOAUDSKNSUDHFASNMV',
    list_btn='learn more'
}) {
  return (
    <>
        <li>
                    <div className='list-info'>
                        <span className='list-title'>{list_title}</span>
                        <p>{list_para}</p>

                    </div>
                    <button className='list-btn'>{list_btn}</button>
                </li>
    </>
  )
}

export default List2