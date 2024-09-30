import React from 'react'
import './App.css'
import Hero from './sections/Hero'
import OverlayLogoSection from './sections/OverlayLogoSection'

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <OverlayLogoSection />
    </div>
  )
}

export default App
