import React from "react";
import './circle.css'

function Gole({size,content}){
    return(
        <>
        {/* expected size are XL L M S */}
        <div className='circles'>
            <div className={size}>{content}</div>
            <div className={size}>{content}</div>
        </div>
        </>
    )
}
function Circle(){
    return(
    <>

<div className="mainConatiner">
        <div className="contentContainer">
            <div>primary</div>
            <div>Accent</div>
        </div>
        <Gole size={'XL'} content={'BB'}/>
        <Gole size={'L'} content={'BB'}/>
        <Gole size={'M'} content={'BB'}/>
        <Gole size={'S'} content={'BB'}/>
        
</div>
    </>
    )
}

export default Circle