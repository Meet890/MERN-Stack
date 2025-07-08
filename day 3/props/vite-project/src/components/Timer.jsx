import React, { useEffect, useState } from 'react'

function Timer() {
    let[time, setTime] =useState(0)

     useEffect(() => {
        let id = setInterval(()=>{
            console.log("Interval is running ",time)
            setTime(time+1)
        },1000)

         return()=>{
        console.log("Cleaning running");
        clearInterval(id);
        
      }
      },[time])//[] is showing one time use effect 

     

      

    return (
        <div className='text-center text-2x1 text-blue-600'>
            Timer: {time }
        </div>
    )
}

export default Timer