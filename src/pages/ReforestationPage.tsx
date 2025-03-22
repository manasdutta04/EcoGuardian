import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import ImageDropzone from '../components/common/ImageDropzone';
import { reforestationService, ReforestationAnalysisResult } from '../services/googleAiService';
import styles from './Reforestation.module.css';

const ReforestationPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [coordinates, setCoordinates] = useState<string>('');
  const [areaSize, setAreaSize] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [climate, setClimate] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<ReforestationAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    // Reset any previous results when a new file is selected
    setAnalysisResult(null);
    setError(null);
  };

  const resetForm = () => {
    setSelectedFile(null);
    setCoordinates('');
    setAreaSize('');
    setRegion('');
    setClimate('');
    setAnalysisResult(null);
    setError(null);
  };

  const generatePlan = async () => {
    // Validate file upload
    if (!selectedFile) {
      setError('Please upload a satellite image first.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Create location information string from the inputs
      const locationInfo = [
        coordinates && `Coordinates: ${coordinates}`,
        areaSize && `Area: ${areaSize}`,
        region && `Region: ${region}`,
        climate && `Climate: ${climate}`
      ].filter(Boolean).join(', ');

      // Call the service to analyze the reforestation site
      const result = await reforestationService.analyzeReforestationSite(
        selectedFile,
        locationInfo
      );

      setAnalysisResult(result);
    } catch (err) {
      console.error('Error analyzing reforestation site:', err);
      setError('Failed to analyze the reforestation site. Please try again later.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className={styles.page}>
      <PageHeader
        title="Reforestation Planning"
        description="Upload satellite imagery and get AI-powered recommendations for optimal reforestation strategies."
      />
      
      <div className={styles.contentContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Upload Satellite Imagery</h2>
          <p className={styles.cardDescription}>
            Our AI will analyze your satellite image to identify suitable tree species, evaluate soil health, 
            and provide customized reforestation recommendations for your site.
          </p>

          <ImageDropzone 
            onFileSelect={handleFileSelect} 
            maxSize={10 * 1024 * 1024} // 10MB
            acceptedFileTypes="image/*"
          />

          {selectedFile && (
            <div className={styles.fileSelected}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Selected file: {selectedFile.name}</span>
            </div>
          )}

          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>Location Information</h3>
            <p className={styles.formSectionDescription}>
              Provide additional details about the location to improve analysis accuracy.
            </p>

            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="coordinates" className={styles.inputLabel}>Coordinates (optional)</label>
                <input
                  type="text"
                  id="coordinates"
                  className={styles.input}
                  placeholder="e.g. 37.7749° N, 122.4194° W"
                  value={coordinates}
                  onChange={(e) => setCoordinates(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="areaSize" className={styles.inputLabel}>Area Size (optional)</label>
                <input
                  type="text"
                  id="areaSize"
                  className={styles.input}
                  placeholder="e.g. 5 hectares, 12 acres"
                  value={areaSize}
                  onChange={(e) => setAreaSize(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="region" className={styles.inputLabel}>Region (optional)</label>
                <input
                  type="text"
                  id="region"
                  className={styles.input}
                  placeholder="e.g. Pacific Northwest"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="climate" className={styles.inputLabel}>Climate Type (optional)</label>
                <input
                  type="text"
                  id="climate"
                  className={styles.input}
                  placeholder="e.g. Temperate, Tropical"
                  value={climate}
                  onChange={(e) => setClimate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              onClick={generatePlan}
              disabled={!selectedFile || isAnalyzing}
            >
              {isAnalyzing ? (
                <span className={styles.buttonLoading}>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                  Analyzing...
                </span>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Generate Reforestation Plan
                </>
              )}
            </button>
            
            <button
              className={styles.secondaryButton}
              onClick={resetForm}
              disabled={isAnalyzing}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L12.586 12l-2.293-2.293a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Reset Form
            </button>
          </div>

          {error && (
            <div className={styles.errorBox}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className={styles.errorText}>{error}</p>
            </div>
          )}
        </div>

        {analysisResult && (
          <div className={styles.resultsCard}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsTitle}>Reforestation Analysis Results</h2>
              <div className={styles.confidenceScore}>
                <span className={styles.confidenceLabel}>Confidence:</span>
                <div className={styles.confidenceMeter}>
                  <div 
                    className={styles.confidenceFill} 
                    style={{ width: `${analysisResult.confidenceScore}%` }}
                  ></div>
                </div>
                <span className={styles.confidenceValue}>{analysisResult.confidenceScore.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>Recommended Species</h3>
              <div className={styles.speciesList}>
                {analysisResult.suitableSpecies.map((species, index) => (
                  <div key={index} className={styles.speciesItem}>
                    <span className={styles.speciesIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.382 13.795a1 1 0 01.383-.795l2.707-2.2a.5.5 0 01.696.067L10 13.293l2.836-3.683a.5.5 0 01.697-.075L15.955 11c.401.332.445.922.095 1.304l-3.746 4.1a.5.5 0 01-.72.017L10 14.743l-1.842 1.762a.5.5 0 01-.716-.046l-3.127-3.468a1 1 0 01.067-1.196z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v.585a1 1 0 01-.379.78l-7.341 5.98a1 1 0 01-1.27-.058L3.379 7.085A1 1 0 013 6.305V5z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {species}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>Site Assessment</h3>
              <div className={styles.resultsGrid}>
                <div className={styles.resultItem}>
                  <h4 className={styles.resultItemTitle}>Soil Health</h4>
                  <p className={styles.resultItemValue}>{analysisResult.soilHealth}</p>
                </div>
                <div className={styles.resultItem}>
                  <h4 className={styles.resultItemTitle}>Projected Growth Rate</h4>
                  <p className={styles.resultItemValue}>{analysisResult.projectedGrowthRate}</p>
                </div>
              </div>
            </div>

            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>Challenges</h3>
              <ul className={styles.challengesList}>
                {analysisResult.challenges.map((challenge, index) => (
                  <li key={index} className={styles.challengeItem}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className={styles.resultsSection}>
              <h3 className={styles.resultsSectionTitle}>Recommendations</h3>
              <ul className={styles.recommendationsList}>
                {analysisResult.recommendations.map((recommendation, index) => (
                  <li key={index} className={styles.recommendationItem}>{recommendation}</li>
                ))}
              </ul>
            </div>

            <div className={styles.resultsSection}>
              <div className={styles.disclaimer}>
                Note: This analysis is based on the provided image and limited information. For best results, please consult 
                with a professional forester or ecologist before beginning any large-scale reforestation project.
              </div>
            </div>
          </div>
        )}

        {!analysisResult && (
          <div className={styles.card}>
            <span className={styles.comingSoonBadge}>Enhanced Feature</span>
            <h2 className={styles.cardTitle}>Advanced Reforestation Planning</h2>
            <p className={styles.comingSoonDescription}>
              Our AI-powered reforestation planning tool is being enhanced with additional features, including 
              long-term climate modeling, biodiversity impact assessments, and carbon sequestration projections. 
              These advanced features will help optimize reforestation efforts to maximize environmental benefits 
              and ensure sustainable outcomes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReforestationPage; 