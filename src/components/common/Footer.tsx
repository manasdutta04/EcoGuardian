import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoImage from '../../assets/images/ecoguardian-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Wave shape divider with animation */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.waveSvg}>
          <path fill="#111827" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,122.7C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.logoContainer}>
              <div className={styles.logoIconWrapper}>
                <img 
                  src={logoImage} 
                  alt="EcoGuardian Logo" 
                  className={styles.logoIcon} 
                />
              </div>
              <h2 className={styles.logoText}>EcoGuardian</h2>
            </div>
            <p className={styles.companyDescription}>
              AI-Powered Nature Conservation Assistant helping to protect our environment
              through advanced technology and community engagement.
            </p>
            <div>
              <p className={styles.contactTitle}>Contact Us</p>
              <a href="mailto:info@ecoguardian.org" className={`${styles.contactLink} ${styles.contactLinkHover}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ecoguardian.org
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={styles.columnTitle}>Features</h3>
            <ul className={styles.linksList}>
              {[
                { name: 'Habitat Monitoring', path: '/habitat-monitoring' },
                { name: 'Species Tracking', path: '/species-tracking' },
                { name: 'Carbon Footprint', path: '/carbon-footprint' },
                { name: 'Reforestation', path: '/reforestation' },
                { name: 'Community', path: '/community' }
              ].map((item, index) => (
                <li key={index} className={styles.linkItem}>
                  <Link 
                    to={item.path} 
                    className={styles.linkAnchor}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.linkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linksList}>
              {[
                { name: 'Documentation', action: 'https://example.com' },
                { name: 'API', action: 'https://example.com' },
                { name: 'Privacy Policy', action: 'https://example.com' },
                { name: 'Terms of Service', action: 'https://example.com' }
              ].map((item, index) => (
                <li key={index} className={styles.linkItem}>
                  <a 
                    href={item.action} 
                    className={styles.linkAnchor}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.linkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={styles.columnTitle}>Connect</h3>
            <div className={styles.socialLinks}>
              {[
                { name: 'Twitter', icon: (
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                ) },
                { name: 'GitHub', icon: (
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                ) },
                { name: 'Facebook', icon: (
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                ) },
                { name: 'Instagram', icon: (
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                ) }
              ].map((item, index) => (
                <a
                  key={index}
                  href="https://example.com"
                  className={styles.socialButton}
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            
            <div className={styles.newsletterContainer}>
              <h4 className={styles.newsletterTitle}>Subscribe to our newsletter</h4>
              <form className={styles.newsletterForm}>
                <div className={styles.inputContainer}>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={styles.emailInput}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={styles.subscribeButton}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} EcoGuardian. All rights reserved. | A craft of{' '}
            <a 
              href="https://www.linkedin.com/in/manasdutta04/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.authorLink}
            >
              Manas Dutta
            </a>
          </p>
          <p className={styles.poweredBy}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.poweredByIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by AI to protect our planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 