import React from 'react'
import './blog.css'
export const BlogCard=({
    imgSrc="./untitled.png" ,
    title='Perfect solution for small business'
    ,description='Small businesses need to generate leads to grow. You can use tools like Ringy.',
    avatar='https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/Fixed-Avatar/avatar-15.png',
    avatarName='Amy Burgess',
    avatarDesc='Customer Manger, Solution Oy'
})=> {
  return (
    <div>
        <div className="container">
        <div className="box">
            <img className="image" src={imgSrc} alt="blogcard"/>
            <div className="heading">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
                <div className="line"></div>
                <div className="detail">
                    <div className="outer_circle">
                    <div className="avartar_circle">
                        <img src={avatar} alt="avartar" className="avartar"/>
                    </div>
                </div>
                <div className="name">                
                        <span>{avatarName}</span>
                        <h3>{avatarDesc}</h3>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogCard