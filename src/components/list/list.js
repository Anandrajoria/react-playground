import React from 'react'
import './list.css'
import List2 from './list2'
function List() {
  return (
    <>
        <section className='list-body'>
            <ul className='list-ul'>
                    <List2  
                            list_title='heading'
                            list_para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati, et sapiente facilis quas enim dignissimos, quod, illum aliquid quasi labore qui! Saepe assumenda aliquid eaque facere incidunt harum quasi.'
                            list_btn='learn more'
                    />
                    <List2  
                            list_title='heading'
                            list_para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati, et sapiente facilis quas enim dignissimos, quod, illum aliquid quasi labore qui! Saepe assumenda aliquid eaque facere incidunt harum quasi.'
                            list_btn='learn more'
                    />
                    <List2  
                            list_title='heading'
                            list_para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati, et sapiente facilis quas enim dignissimos, quod, illum aliquid quasi labore qui! Saepe assumenda aliquid eaque facere incidunt harum quasi.'
                            list_btn='learn more'
                    />
            </ul>
        </section>
    </>
  )
}

export default List