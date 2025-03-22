import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  
  // Check if user is on login page
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleAuthAction = async () => {
    if (currentUser) {
      try {
        await logout();
        navigate('/');
      } catch (error) {
        console.error('Failed to log out:', error);
      }
    } else {
      navigate('/login');
    }
  };

  // Navigate to register page
  const handleRegister = () => {
    navigate('/register');
  };

  // Navigate to login page
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.solid : styles.transparent}`}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          <div className={styles.logoWrapper}>
            <Link to={currentUser ? "/dashboard" : "/"} className={`${styles.logoLink} ${isScrolled ? styles.logoLinkDark : styles.logoLinkLight}`}>
              <div className={`${styles.logoIconWrapper} ${isScrolled ? styles.logoIconWrapperDark : styles.logoIconWrapperLight}`}>
                <img 
                  src="/images/ecoguardian-logo.png" 
                  alt="EcoGuardian Logo" 
                  className={styles.logoIcon} 
                />
              </div>
              <span className={styles.logoText}>EcoGuardian</span>
            </Link>
          </div>

          <div className={styles.desktopMenu}>
            {[
              { path: '/habitat-monitoring', label: 'Habitat Monitoring', protected: true },
              { path: '/species-tracking', label: 'Species Tracking', protected: true },
              { path: '/carbon-footprint', label: 'Carbon Footprint', protected: true },
              { path: '/reforestation', label: 'Reforestation', protected: true },
              { path: '/community', label: 'Community', protected: true }
            ].map((item) => (
              (!item.protected || (item.protected && currentUser)) && (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navLink} ${
                    isScrolled ? styles.navLinkDark : styles.navLinkLight
                  } ${
                    isActive(item.path) ? (isScrolled ? styles.activeDark : styles.activeLight) : ''
                  }`}
                >
                  {item.label}
                  <span 
                    className={`${styles.linkUnderline} ${styles.underlinePrimary} ${
                      isActive(item.path) ? styles.linkUnderlineActive : styles.linkUnderlineHover
                    }`}
                  ></span>
                </Link>
              )
            ))}
            
            {/* Conditional rendering of auth buttons */}
            {!currentUser && isLoginPage && (
              <button 
                onClick={handleRegister}
                className={`${styles.signInButton} ${
                  isScrolled ? styles.signInButtonDark : styles.signInButtonLight
                }`}
              >
                Sign Up
              </button>
            )}
            
            {!currentUser && isRegisterPage && (
              <button 
                onClick={handleLogin}
                className={`${styles.signInButton} ${
                  isScrolled ? styles.signInButtonDark : styles.signInButtonLight
                }`}
              >
                Sign In
              </button>
            )}
            
            {!isLoginPage && !isRegisterPage && (
              <button 
                onClick={handleAuthAction}
                className={`${styles.signInButton} ${
                  isScrolled ? styles.signInButtonDark : styles.signInButtonLight
                }`}
              >
                {currentUser ? 'Sign Out' : 'Sign In'}
              </button>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className={`${styles.mobileMenuButton} ${
              isScrolled ? styles.mobileMenuButtonDark : styles.mobileMenuButtonLight
            }`}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className={styles.mobileMenuIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className={styles.mobileMenuIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${styles.mobileMenuOverlay} ${
          isMenuOpen ? styles.mobileMenuVisible : styles.mobileMenuHidden
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`${styles.mobileMenuContainer} ${
            !isMenuOpen ? styles.mobileMenuHiddenContainer : ''
          }`} 
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileMenuTitle}>
              <img 
                src="/images/ecoguardian-logo.png" 
                alt="EcoGuardian Logo" 
                className={styles.mobileMenuLogo} 
              />
              EcoGuardian
            </div>
            <button 
              onClick={toggleMenu}
              className={styles.mobileMenuCloseButton}
            >
              <svg className={styles.mobileMenuCloseIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className={styles.mobileMenuItems}>
            {[
              { path: '/habitat-monitoring', label: 'Habitat Monitoring', protected: true },
              { path: '/species-tracking', label: 'Species Tracking', protected: true },
              { path: '/carbon-footprint', label: 'Carbon Footprint', protected: true },
              { path: '/reforestation', label: 'Reforestation', protected: true },
              { path: '/community', label: 'Community', protected: true }
            ].map((item) => (
              (!item.protected || (item.protected && currentUser)) && (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.mobileMenuItem} ${
                    isActive(item.path) ? styles.mobileMenuItemActive : styles.mobileMenuItemInactive
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* Mobile menu auth buttons with conditional rendering */}
            {!currentUser && isLoginPage && (
              <button 
                onClick={handleRegister}
                className={styles.mobileSignInButton}
              >
                Sign Up
              </button>
            )}
            
            {!currentUser && isRegisterPage && (
              <button 
                onClick={handleLogin}
                className={styles.mobileSignInButton}
              >
                Sign In
              </button>
            )}
            
            {!isLoginPage && !isRegisterPage && (
              <button 
                onClick={handleAuthAction}
                className={styles.mobileSignInButton}
              >
                {currentUser ? 'Sign Out' : 'Sign In'}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 