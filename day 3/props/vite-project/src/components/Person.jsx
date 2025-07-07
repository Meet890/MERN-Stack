import React from 'react'

function Person({name, color, age, city}) {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md"
         style={{ border: `2px solid ${color}` }}>
      <h1><b>I am {name}</b></h1>
      <h2>I am all {color}</h2>
      <h2>I am {age} years old</h2>
      <h2>I live in {city}</h2>
    </div>
  )
}

export default Person;