import React from 'react'
import './App.css'
import Hero from './sections/Hero'

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
    </div>
  )
}

export default App
