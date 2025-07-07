import React from 'react'

function UseState() {
    // let[count, setCount] = React.useState(0);
    // let count = 0 ;
    // const addValue = () => {
    //     setCount(count + 1);
    //     //count = count + 1;
    //     console.log("count is :"+ count)

    // }


  return (
    <>
        {/* <h1>Counter App</h1>
        <h2>Counter :</h2>

        <button type="button" onClick={() => document.body.style.backgroundColor = }>Increase</button>
        <button type="button" onClick={() => setBg(Blue)}>Decrease</button>
        <button type="button" onClick={() => setBg(Black)}>Reset</button> */}
        {/* <h2>Counter : {count}</h2> */}
         <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
        <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
        <button type="button" onClick={() => setCount(0)}>Reset</button>
            <br />
        <button type="button" onClick={() => document.body.style.backgroundColor = "red"}>Change Background Color</button>
        <button type="button" onClick={() => document.body.style.backgroundColor = "blue"}>Change Background Color</button>
        <button type="button" onClick={() => document.body.style.backgroundColor = "green"}>Change Background Color</button>
        <button type="button" onClick={() => document.body.style.backgroundColor = "yellow"}>Change Background Color</button>
        {/* <h2>{count}</h2> */}

        {/* //create a button to decrease the count */}
        




    </>
  )
  
}

export default UseState