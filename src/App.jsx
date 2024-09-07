import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {

  return (
    <div className='min-h-screen flex justify-center main bg-[#e2d4ff]'>
        <Weather />
    </div>
  )
}

export default App
