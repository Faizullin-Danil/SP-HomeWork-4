import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from "./components/CountdownTimer/CountdownTimer.jsx"
import UserList from "./components/UserList/UserList.jsx"
import WindowSize from "./components/WindowSize/WindowSize.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pos">
      <CountdownTimer/>
      <UserList/>
      <WindowSize/>
    </div>
  )
}

export default App
