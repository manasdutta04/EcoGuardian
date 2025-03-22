import React from 'react';
import FileUploader from '../components/common/FileUploader';
import styles from './Reforestation.module.css';

const ReforestationPage: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Implementation for analyzing deforested areas would go here
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Reforestation Planning</h1>
        <p className={styles.pageDescription}>
          Upload satellite imagery or photos of deforested areas to receive AI-powered recommendations for 
          optimal reforestation strategies. Our system analyzes soil conditions, climate data, and local 
          biodiversity to suggest the most suitable tree species and planting patterns.
        </p>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Upload Area Image</h3>
            <div style={{ marginTop: "1.25rem" }}>
              <FileUploader 
                onFileSelect={handleFileSelect}
                acceptedFileTypes="image/*"
                label="Upload a satellite image or photo of the deforested area"
              />
            </div>
            <p className={styles.cardHint}>
              For best results, provide high-resolution satellite imagery or aerial photographs.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>
              Location Information
            </h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="coordinates" className={styles.formLabel}>
                  Coordinates (if known)
                </label>
                <input
                  type="text"
                  name="coordinates"
                  id="coordinates"
                  className={styles.formInput}
                  placeholder="e.g., 40.7128° N, 74.0060° W"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="area-size" className={styles.formLabel}>
                  Area Size (if known)
                </label>
                <div className={styles.inputWithAddon}>
                  <input
                    type="number"
                    name="area-size"
                    id="area-size"
                    className={`${styles.formInput} ${styles.inputWithAddonField}`}
                    placeholder="e.g., 100"
                  />
                  <span className={styles.inputAddon}>
                    hectares
                  </span>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="region" className={styles.formLabel}>
                  Region/Country
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  className={styles.formInput}
                  placeholder="e.g., Amazon Basin, Brazil"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="climate" className={styles.formLabel}>
                  Climate Type (if known)
                </label>
                <select
                  id="climate"
                  name="climate"
                  className={styles.formSelect}
                >
                  <option value="">Select climate type</option>
                  <option value="tropical">Tropical</option>
                  <option value="dry">Dry/Arid</option>
                  <option value="temperate">Temperate</option>
                  <option value="continental">Continental</option>
                  <option value="polar">Polar</option>
                </select>
              </div>
            </div>

            <div className={styles.formActions}>
              <button
                type="button"
                className={styles.primaryButton}
              >
                Generate Reforestation Plan
              </button>
            </div>
          </div>
        </div>

        <div className={styles.comingSoonSection}>
          <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
          <p className={styles.comingSoonDescription}>
            Our AI-powered reforestation planning tool is currently under development.
            Soon you'll be able to receive detailed reforestation strategies tailored to specific regions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReforestationPage; 