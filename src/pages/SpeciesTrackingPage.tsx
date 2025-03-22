import React from 'react';
import FileUploader from '../components/common/FileUploader';
import styles from './SpeciesTracking.module.css';

const SpeciesTrackingPage: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Implement species identification logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Species Tracking</h1>
        <p className={styles.pageDescription}>
          Upload images or recordings of wildlife to identify species and track population trends.
          Our AI technology can recognize thousands of species and provide valuable insights about their
          conservation status and population health.
        </p>

        <div className={styles.uploadCard}>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Upload Wildlife Image</h3>
            <div className={styles.uploaderContainer}>
              <FileUploader 
                onFileSelect={handleFileSelect}
                acceptedFileTypes="image/*"
                label="Upload a wildlife image"
              />
            </div>
            <p className={styles.cardHint}>
              <svg className={styles.cardHintIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              For best results, ensure the species is clearly visible in the image.
            </p>
          </div>
        </div>

        <div className={styles.comingSoonSection}>
          <svg className={styles.comingSoonIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
          <p className={styles.comingSoonDescription}>
            Advanced species tracking features are currently under development. Stay tuned for updates!
          </p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className={styles.featureTitle}>Population Tracking</h4>
              <p className={styles.featureDescription}>Track species population trends over time in specific regions.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className={styles.featureTitle}>Migration Patterns</h4>
              <p className={styles.featureDescription}>Visualize and understand species migration and movement patterns.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className={styles.featureTitle}>Conservation Status</h4>
              <p className={styles.featureDescription}>Get real-time data on species' conservation status and threats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesTrackingPage; 