import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './Components/Sidebar'
import './App.css'
import { BrowserRouter } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
    </>
  )
}

export default App
