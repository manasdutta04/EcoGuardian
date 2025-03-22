import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import './App.css';
import HomePage from './pages/HomePage';
import HabitatMonitoringPage from './pages/HabitatMonitoringPage';
import SpeciesTrackingPage from './pages/SpeciesTrackingPage';
import CarbonFootprintPage from './pages/CarbonFootprintPage';
import ReforestationPage from './pages/ReforestationPage';
import CommunityPage from './pages/CommunityPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// ScrollToTop component to restore scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Page wrapper for transition animations
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.pageTransition}>{children}</div>;
};

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Navbar />
        <ScrollToTop />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/habitat-monitoring" element={<PageTransition><HabitatMonitoringPage /></PageTransition>} />
            <Route path="/species-tracking" element={<PageTransition><SpeciesTrackingPage /></PageTransition>} />
            <Route path="/carbon-footprint" element={<PageTransition><CarbonFootprintPage /></PageTransition>} />
            <Route path="/reforestation" element={<PageTransition><ReforestationPage /></PageTransition>} />
            <Route path="/community" element={<PageTransition><CommunityPage /></PageTransition>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
