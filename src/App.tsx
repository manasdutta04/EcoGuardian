import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import './App.css';
import HomePage from './pages/HomePage';
import HabitatMonitoringPage from './pages/HabitatMonitoringPage';
import SpeciesTrackingPage from './pages/SpeciesTrackingPage';
import CarbonFootprintPage from './pages/CarbonFootprintPage';
import ReforestationPage from './pages/ReforestationPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';

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

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className={styles.loadingContainer}>Loading...</div>;
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Public only route (accessible only when not logged in)
const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className={styles.loadingContainer}>Loading...</div>;
  }
  
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }
  
  return <>{children}</>;
};

// Home Route - Redirects based on auth status
const HomeRoute = () => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div className={styles.loadingContainer}>Loading...</div>;
  }
  
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  } else {
    return <Navigate to="/login" />;
  }
};

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  // Apply 'auth-page' class to document body when on auth pages
  useEffect(() => {
    if (isAuthPage) {
      document.body.classList.add('auth-page');
    } else {
      document.body.classList.remove('auth-page');
    }
    
    // Add responsive class to body for mobile optimizations
    document.body.classList.add('responsive-layout');
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('auth-page');
      document.body.classList.remove('responsive-layout');
    };
  }, [isAuthPage]);
  
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <ScrollToTop />
      <main className={`${styles.mainContent} responsive-container`}>
        <Routes>
          {/* Home route - redirects to login or dashboard based on auth status */}
          <Route path="/" element={<HomeRoute />} />
          
          {/* Auth routes (only when not logged in) */}
          <Route path="/login" element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
          <Route path="/register" element={<PublicOnlyRoute><RegisterPage /></PublicOnlyRoute>} />
          
          {/* Dashboard - The main page after login */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <PageTransition><HomePage /></PageTransition>
            </ProtectedRoute>
          } />
          
          {/* Protected routes (only when logged in) */}
          <Route path="/habitat-monitoring" element={
            <ProtectedRoute>
              <PageTransition><HabitatMonitoringPage /></PageTransition>
            </ProtectedRoute>
          } />
          <Route path="/species-tracking" element={
            <ProtectedRoute>
              <PageTransition><SpeciesTrackingPage /></PageTransition>
            </ProtectedRoute>
          } />
          <Route path="/carbon-footprint" element={
            <ProtectedRoute>
              <PageTransition><CarbonFootprintPage /></PageTransition>
            </ProtectedRoute>
          } />
          <Route path="/reforestation" element={
            <ProtectedRoute>
              <PageTransition><ReforestationPage /></PageTransition>
            </ProtectedRoute>
          } />
          <Route path="/community" element={
            <ProtectedRoute>
              <PageTransition><CommunityPage /></PageTransition>
            </ProtectedRoute>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
