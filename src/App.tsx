import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Landing from './pages/Landing';
import TermsOfService from './pages/TermsOfService';
import { AccessDenied } from './pages/AccessDenied';

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
      const path = hash.replace('#/', ''); // Replace '#/' with ''
      navigate(path); // Redirect to the updated path
    }
  }, [navigate]);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/accessDenied" element={<AccessDenied />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
