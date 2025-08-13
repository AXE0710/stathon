import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppBar from './components/AppBar'
import Landing from './pages/Landing'

function App() {
  return (
    <>
      
            <AppBar />          
            <Landing />
          
        
      </>
    
  )
}

export default App
