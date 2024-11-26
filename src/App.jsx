import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test11 from './Test11'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>        
      <img src={reactLogo} className="App-logo" alt="logo" />
      <h1 className='reactname'> React</h1>
      <Test11 />
    
    </>
  )
}

export default App
