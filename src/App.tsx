import React from 'react'
import './App.css'
import Hero from './sections/Hero'
import OverlayLogoSection from './sections/OverlayLogoSection'
import Header from './sections/Header'
import IndexesSection from './sections/IndexesSection'

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Header />
      <Hero />
      <OverlayLogoSection />
      <IndexesSection />
    </div>
  )
}

export default App
