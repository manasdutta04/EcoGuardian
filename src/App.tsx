import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import HabitatMonitoringPage from './pages/HabitatMonitoringPage';
import SpeciesTrackingPage from './pages/SpeciesTrackingPage';
import CarbonFootprintPage from './pages/CarbonFootprintPage';
import ReforestationPage from './pages/ReforestationPage';
import CommunityPage from './pages/CommunityPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/habitat-monitoring" element={<HabitatMonitoringPage />} />
            <Route path="/species-tracking" element={<SpeciesTrackingPage />} />
            <Route path="/carbon-footprint" element={<CarbonFootprintPage />} />
            <Route path="/reforestation" element={<ReforestationPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
