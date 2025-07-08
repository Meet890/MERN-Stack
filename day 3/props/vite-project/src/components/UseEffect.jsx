import React, { useEffect, useState } from 'react'

function UseEffect() {
  let[count, setCount] =useState(0)
  useEffect(() => {
    alert("Hello i am meet")
  },[])//[] is showing one time use effect 

  const addValue=()=>{
    setCount(count+1)
    // console.log(count)
  }

  return (
    <div>
      <h1>I am learning use Effect</h1>

      <div>
        <h1>Counter : {count}</h1>
        <div>
          <button onClick={addValue}>Click</button>
        </div>
      </div>
    </div>
  )
}

export default UseEffect