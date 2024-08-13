import React from 'react'
import { BlogCard, Button } from '../../../components'

const BlogCards = () => {
  return (
    <>
   
       <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}
    >
      <tbody>
        <tr>
        
          <td style={{ width: '25%', padding: '10px' }}>
            
            <BlogCard/>
            <BlogCard title='aditya'
                description='i am don'
                avatarName='krishna'
                
            />
            {/* <td style={{ width: '25%', padding: '10px' }}>
          <BlogCard/>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
          <BlogCard/>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
          <BlogCard/>
          </td> */}
          </td>
          {/* <td style={{ width: '25%', padding: '10px' }}>
          <BlogCard/>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
          <BlogCard/>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
          <BlogCard/>
          </td> */}
        </tr>
      </tbody>
    </table>
    </>
   
  )
}

export default BlogCards
