import React from 'react'

function FormHandle() {
  let [userName, setUserName] = React.useState('');

  const handleSubmit = (e) => {
    console.log('hello', userName);
    e.preventDefault();
    setUserName('');
  };

  return (
    <div>FormHandle
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input value={userName} onChange={e => setUserName(e.target.value)} type="text" placeholder="Enter text value" />
          <h1>{userName}</h1>
          <button type="submit" >Submit</button>
        </form>
    </div>
    
  )
}

export default FormHandle