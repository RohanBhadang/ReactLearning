import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="w-full bg-black">
        <h1>heading</h1>
        <div class=" text-white text-2xl 
font-weight: 700 px-8 py-8">
           Google
        </div>
       <div>
      {/* <img src="search.png" alt="Search" class="search-icon search-start" /> */}
      <input type="text" class="search-box" placeholder="Search Google or type a URL" />
      {/* <img src="mic.png" alt="Mic" class="search-icon mic-icon" />
      <img src="lens.png" alt="Lens" class="search-icon lens-icon" /> */}
    </div>
       
       </div>
    </>
  )
}

export default App
