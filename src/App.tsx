import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { HousingOnCredit } from './pages/HousingOnCredit';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  
  // Home, Services, Projects, About, Contact and Housing on Credit pages feature transparent overlay Navbars
  const isTransparentPage = location.pathname === '/' || location.pathname === '/services' || location.pathname === '/projects' || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/housing-on-credit';

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden select-none">
      {/* Render sticky white navbar only on non-transparent pages */}
      {!isTransparentPage && <Navbar transparent={false} />}

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* Services Page */}
            <Route path="/services" element={<Services />} />
            {/* Projects Page */}
            <Route path="/projects" element={<Projects />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
            {/* Housing On Credit Page */}
            <Route path="/housing-on-credit" element={<HousingOnCredit />} />
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            {/* NotFound Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer (includes Final CTA) */}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
