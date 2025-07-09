import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './component/Movie'
import UseMemo from './component/UseMemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Movie /> */}
      <UseMemo/>
    </>
  )
}

export default App
