import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
