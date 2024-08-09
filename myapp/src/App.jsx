import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Welcome from './components/Welcome'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <h1>TABLE</h1>
     <Navbar />
      <Routes>
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/l" element={<Login />} />
        <Route path="/State" element={<State />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Api" element={<Api />} />
      </Routes>
       </>
  )
}

export default App
