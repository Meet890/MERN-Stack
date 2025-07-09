import React from 'react'
import { useEffect } from 'react'
import axios from axios;
function Movies() {

    useEffect(()=>{
        axios.get().then((response)=>{
            
        })
    })
  return (
    <div>Movies</div>
  )
}

export default Movies