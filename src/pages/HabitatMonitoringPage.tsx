import React, { useState } from 'react';
import FileUploader from '../components/common/FileUploader';
import styles from './HabitatMonitoring.module.css';

interface AnalysisResult {
  habitatType: string;
  healthStatus: string;
  threats: string[];
  recommendations: string[];
  confidence: number;
}

const HabitatMonitoringPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [locationData, setLocationData] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    // Reset analysis when a new file is selected
    setAnalysisResult(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert('Please select an image first');
      return;
    }

    // Show loading state
    setIsAnalyzing(true);

    // Simulate API call to Gemini for analysis
    // In a real app, this would be replaced with an actual API call
    setTimeout(() => {
      // Mock analysis results
      const mockResult: AnalysisResult = {
        habitatType: 'Temperate Forest',
        healthStatus: 'Moderate',
        threats: [
          'Evidence of deforestation on the eastern edge',
          'Invasive species present (5% coverage)',
          'Soil erosion in multiple areas'
        ],
        recommendations: [
          'Implement erosion control measures along the affected slopes',
          'Conduct invasive species removal, targeting specifically the detected areas',
          'Establish a buffer zone to prevent further deforestation',
          'Monitor water quality in nearby streams'
        ],
        confidence: 0.87
      };

      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000); // 2 second delay to simulate processing
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Habitat Monitoring</h1>
        <p className={styles.pageDescription}>
          Upload images of natural habitats to receive AI-powered analysis of ecological conditions, 
          threats, and conservation recommendations. Our system uses advanced image recognition to 
          identify habitat types, assess health status, and detect potential environmental issues.
        </p>

        <div className={styles.card}>
          <div className={styles.cardBody}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formFullWidth}>
                  <label htmlFor="habitat-image" className={styles.formLabel}>
                    Upload Habitat Image
                  </label>
                  <FileUploader 
                    onFileSelect={handleFileSelect}
                    acceptedFileTypes="image/*"
                    label="Upload a habitat image"
                  />
                </div>

                <div>
                  <label htmlFor="location-data" className={styles.formLabel}>
                    Location Information (optional)
                  </label>
                  <input
                    id="location-data"
                    name="location-data"
                    type="text"
                    className={styles.formInput}
                    placeholder="e.g., Coordinates, Location Name, or Region"
                    value={locationData}
                    onChange={(e) => setLocationData(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="habitat-type" className={styles.formLabel}>
                    Habitat Type (optional)
                  </label>
                  <select
                    id="habitat-type"
                    name="habitat-type"
                    className={styles.formSelect}
                  >
                    <option value="">Select a habitat type</option>
                    <option value="forest">Forest</option>
                    <option value="wetland">Wetland</option>
                    <option value="grassland">Grassland</option>
                    <option value="coastal">Coastal</option>
                    <option value="desert">Desert</option>
                    <option value="freshwater">Freshwater</option>
                    <option value="marine">Marine</option>
                    <option value="other">Other/Unknown</option>
                  </select>
                </div>
              </div>

              <div className={styles.formActions}>
                <button
                  type="button"
                  className={styles.buttonCancel}
                  onClick={() => {
                    setSelectedFile(null);
                    setLocationData('');
                    setAnalysisResult(null);
                  }}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={!selectedFile || isAnalyzing}
                  className={`${styles.buttonSubmit} ${(!selectedFile || isAnalyzing) ? styles.buttonDisabled : ''}`}
                >
                  {isAnalyzing && <span className={styles.loadingSpinner}></span>}
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Habitat'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Analysis Results Section */}
        {analysisResult && (
          <div className={styles.resultsCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Habitat Analysis Results</h3>
              <p className={styles.cardSubtitle}>
                AI-generated assessment with {(analysisResult.confidence * 100).toFixed(1)}% confidence.
              </p>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.resultsGrid}>
                <div className={styles.resultItem}>
                  <h4 className={styles.resultLabel}>HABITAT TYPE</h4>
                  <p className={styles.resultValue}>{analysisResult.habitatType}</p>
                </div>
                <div className={styles.resultItem}>
                  <h4 className={styles.resultLabel}>HEALTH STATUS</h4>
                  <p>
                    <span
                      className={`${styles.badge} ${
                        analysisResult.healthStatus === 'Good'
                          ? styles.badgeGood
                          : analysisResult.healthStatus === 'Moderate'
                          ? styles.badgeModerate
                          : styles.badgePoor
                      }`}
                    >
                      {analysisResult.healthStatus}
                    </span>
                  </p>
                </div>
              </div>

              <div className={styles.listSection}>
                <h4 className={styles.listTitle}>DETECTED THREATS</h4>
                <ul className={styles.list}>
                  {analysisResult.threats.map((threat, index) => (
                    <li key={index} className={styles.listItem}>
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.listSection}>
                <h4 className={styles.listTitle}>RECOMMENDATIONS</h4>
                <ul className={styles.list}>
                  {analysisResult.recommendations.map((recommendation, index) => (
                    <li key={index} className={styles.listItem}>
                      {recommendation}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.disclaimer}>
                This analysis was generated using AI technology and should be verified by local ecological experts. 
                For more accurate results, consider providing additional images and location data.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HabitatMonitoringPage; 