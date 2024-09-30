import React from 'react'
import './App.css'
import Hero from './sections/Hero'
import OverlayLogoSection from './sections/OverlayLogoSection'
import Header from './sections/Header'
import IndexesSection from './sections/IndexesSection'
import TrendingSection from './sections/TrendingSection'
import HowItWorksSection from './sections/HowItWorksSection'

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Header />
      <Hero />
      <OverlayLogoSection />
      <IndexesSection />
      <TrendingSection />
      <HowItWorksSection />
    </div>
  )
}

export default App
