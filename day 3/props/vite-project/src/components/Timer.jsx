import React, { useEffect, useState } from 'react'

function Timer() {
    let[time, setTime] =useState(0)
    //  useEffect(() => {
    //     let id = setInterval(()=>{
    //         console.log("Interval is running ",time)
    //         //setTime(time+1)
    //         setTime(prev => prev+1)
    //     },1000)

    //      return()=>{
    //     console.log("Cleaning running");
    //     clearInterval(id);
        
    //   }
    //   },[time])//[] is showing one time use effect 





      useEffect(() => {
        let id = setInterval(()=>{
            console.log("Interval is running ",time)
            //setTime(time+1)
            setTime(prev => {
                if(prev >= 10){
                    console.log("previous valus",prev);
                    clearInterval(id);
                    return prev;
                }
                return prev + 1;
            })
        },1000)

         return()=>{
        console.log("Cleaning running");
        clearInterval(id);
        
      }
      },[time])//[] is 
     

      

    return (
        <div className='text-center text-2x1 text-blue-600'>
            Timer: {time }
        </div>
    )
}

export default Timer