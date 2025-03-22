import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.solid : styles.transparent}`}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          <div className={styles.logoWrapper}>
            <Link to="/" className={`${styles.logoLink} ${isScrolled ? styles.logoLinkDark : styles.logoLinkLight}`}>
              <div className={`${styles.logoIconWrapper} ${isScrolled ? styles.logoIconWrapperDark : styles.logoIconWrapperLight}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.2 2.5a1 1 0 011-.8h1.5a1 1 0 011 .8l.3 1.5h1.3l.3-1.5a1 1 0 011-.8h1.5a1 1 0 011 .8l.3 1.5H15a1 1 0 011 1v1a1 1 0 01-1 1h-.3l-.2 1H16a1 1 0 011 1v1a1 1 0 01-1 1h-1.5l-.2 1H16a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-.9-.7l-.1-.3H7l-.1.3a1 1 0 01-.9.7H4a1 1 0 01-1-1v-1a1 1 0 011-1h1.5l-.2-1H4a1 1 0 01-1-1v-1a1 1 0 011-1h1.5l-.2-1H4a1 1 0 01-1-1V4a1 1 0 011-1h2.6l.3-1.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className={styles.logoText}>EcoGuardian</span>
            </Link>
          </div>

          <div className={styles.desktopMenu}>
            {[
              { path: '/habitat-monitoring', label: 'Habitat Monitoring' },
              { path: '/species-tracking', label: 'Species Tracking' },
              { path: '/carbon-footprint', label: 'Carbon Footprint' },
              { path: '/reforestation', label: 'Reforestation' },
              { path: '/community', label: 'Community' }
            ].map((item) => (
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
            ))}
            
            <button 
              className={`${styles.signInButton} ${
                isScrolled ? styles.signInButtonDark : styles.signInButtonLight
              }`}
            >
              Sign In
            </button>
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
            <div className={styles.mobileMenuTitle}>EcoGuardian</div>
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
              { path: '/habitat-monitoring', label: 'Habitat Monitoring' },
              { path: '/species-tracking', label: 'Species Tracking' },
              { path: '/carbon-footprint', label: 'Carbon Footprint' },
              { path: '/reforestation', label: 'Reforestation' },
              { path: '/community', label: 'Community' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileMenuItem} ${
                  isActive(item.path) ? styles.mobileMenuItemActive : styles.mobileMenuItemInactive
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <button className={styles.mobileSignInButton}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 