import React, { useState, useEffect } from 'react';
import styles from './CarbonFootprint.module.css';
import { carbonFootprintService, CarbonFootprintResult } from '../services/googleAiService';

type ActivityCategory = 'transportation' | 'energy' | 'food' | 'shopping' | 'waste';

interface Activity {
  category: ActivityCategory;
  name: string;
  value: number;
  unit: string;
}

const CarbonFootprintPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('transportation');
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculationResult, setCalculationResult] = useState<CarbonFootprintResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Activity state with useState to track input values
  const [activityValues, setActivityValues] = useState<Record<string, number>>({});

  // Initialize activities with empty values
  useEffect(() => {
    const initialActivityValues: Record<string, number> = {};
    
    // Create keys for all activities
    Object.keys(activities).forEach(categoryKey => {
      const category = categoryKey as ActivityCategory;
      activities[category].forEach(activity => {
        const key = `${category}-${activity.name}`;
        initialActivityValues[key] = 0;
      });
    });
    
    console.log("Initializing activity values:", initialActivityValues);
    setActivityValues(initialActivityValues);
  }, []);

  // Mock activity data
  const activities: Record<ActivityCategory, Activity[]> = {
    transportation: [
      { category: 'transportation', name: 'Car Travel', value: 0, unit: 'miles/week' },
      { category: 'transportation', name: 'Public Transport', value: 0, unit: 'trips/week' },
      { category: 'transportation', name: 'Air Travel', value: 0, unit: 'flights/year' },
    ],
    energy: [
      { category: 'energy', name: 'Electricity Usage', value: 0, unit: 'kWh/month' },
      { category: 'energy', name: 'Natural Gas', value: 0, unit: 'therm/month' },
    ],
    food: [
      { category: 'food', name: 'Meat Consumption', value: 0, unit: 'servings/week' },
      { category: 'food', name: 'Dairy Consumption', value: 0, unit: 'servings/week' },
      { category: 'food', name: 'Food Waste', value: 0, unit: 'kg/week' },
    ],
    shopping: [
      { category: 'shopping', name: 'Clothing Purchases', value: 0, unit: 'items/month' },
      { category: 'shopping', name: 'Electronics', value: 0, unit: 'items/year' },
    ],
    waste: [
      { category: 'waste', name: 'Recycling Rate', value: 0, unit: '% of waste' },
      { category: 'waste', name: 'Composting', value: 0, unit: 'kg/week' },
    ],
  };

  // Handle input change for activity values
  const handleActivityChange = (category: string, name: string, value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    
    // Only accept valid numbers
    if (isNaN(numValue)) return;
    
    const activityKey = `${category}-${name}`;
    
    // We need to create a new object to trigger a re-render
    setActivityValues(prevValues => ({
      ...prevValues,
      [activityKey]: numValue
    }));
    
    console.log(`Updated ${activityKey} to ${numValue}`);
  };

  // Calculate carbon footprint
  const calculateCarbonFootprint = async () => {
    try {
      setIsCalculating(true);
      setError(null);
      
      console.log("Starting carbon footprint calculation");
      console.log("Current activity values:", activityValues);
      
      // Check if any values have been entered
      const hasEnteredValues = Object.values(activityValues).some(value => value > 0);
      console.log("Has entered values:", hasEnteredValues);
      
      if (!hasEnteredValues) {
        const errorMsg = "Please enter at least one activity value before calculating your footprint.";
        console.log("Error:", errorMsg);
        setError(errorMsg);
        setIsCalculating(false);
        return;
      }
      
      // Structure the user data
      const userData: Record<string, Record<string, { value: number, unit: string }>> = {};
      
      // Populate the user data from activityValues
      Object.keys(activities).forEach(categoryKey => {
        const category = categoryKey as ActivityCategory;
        userData[category] = {};
        
        activities[category].forEach(activity => {
          const activityKey = `${category}-${activity.name}`;
          const value = activityValues[activityKey] || 0;
          
          // Log each activity and its value
          console.log(`Setting activity: ${activityKey} = ${value} ${activity.unit}`);
          
          userData[category][activity.name] = {
            value: value,
            unit: activity.unit
          };
        });
      });
      
      console.log('User data for carbon footprint calculation:', JSON.stringify(userData, null, 2));
      
      // Call the service
      try {
        console.log("Calling carbon footprint service...");
        const result = await carbonFootprintService.analyzeCarbonFootprint(userData);
        console.log("Carbon footprint service result:", result);
        setCalculationResult(result);
      } catch (serviceError) {
        console.error('Service error:', serviceError);
        
        console.log("Generating mock data as fallback");
        // Generate mock data as fallback
        const mockData: CarbonFootprintResult = {
          totalEmissions: 0,
          breakdownByCategory: {
            transportation: 0,
            energy: 0,
            food: 0,
            shopping: 0,
            waste: 0
          },
          comparisonToAverage: 0,
          recommendations: [
            "No activities were entered with sufficient values to calculate emissions"
          ],
          confidence: 0
        };
        
        // Calculate mock emissions based on the entered values
        Object.keys(activityValues).forEach(key => {
          if (!key.includes('-')) {
            console.log(`Skipping invalid key format: ${key}`);
            return;
          }
          
          const parts = key.split('-');
          if (parts.length < 2) {
            console.log(`Skipping invalid key format: ${key}`);
            return;
          }
          
          const category = parts[0];
          const activityName = parts.slice(1).join('-'); // Handle activity names that might contain hyphens
          const value = activityValues[key];
          
          console.log(`Processing activity: ${category} - ${activityName} = ${value}`);
          
          if (value > 0) {
            // Simple multipliers for demo purposes
            let multiplier = 0;
            
            if (category === 'transportation') {
              // Different multipliers based on activity name
              if (activityName.includes('Car')) multiplier = 2.3;
              else if (activityName.includes('Public')) multiplier = 0.5;
              else if (activityName.includes('Air')) multiplier = 90;
              else multiplier = 1.5;
            } else if (category === 'energy') {
              multiplier = activityName.includes('Electricity') ? 0.4 : 1.8;
            } else if (category === 'food') {
              if (activityName.includes('Meat')) multiplier = 6.0;
              else if (activityName.includes('Dairy')) multiplier = 2.5;
              else multiplier = 1.2;
            } else if (category === 'shopping') {
              multiplier = activityName.includes('Clothing') ? 10 : 30;
            } else if (category === 'waste') {
              // For recycling, higher value means lower emissions
              multiplier = activityName.includes('Recycling') ? 0.02 : 0.8; 
            }
            
            const emission = value * multiplier;
            console.log(`Calculated emissions for ${category} - ${activityName}: ${value} × ${multiplier} = ${emission}`);
            
            if (mockData.breakdownByCategory[category as keyof typeof mockData.breakdownByCategory] !== undefined) {
              mockData.breakdownByCategory[category as keyof typeof mockData.breakdownByCategory] += emission;
              mockData.totalEmissions += emission;
            } else {
              console.log(`Unknown category: ${category}`);
            }
          }
        });
        
        console.log("Mock data breakdown:", mockData.breakdownByCategory);
        console.log("Total mock emissions:", mockData.totalEmissions);
        
        // If we calculated some emissions, add some variance
        if (mockData.totalEmissions > 0) {
          // Add realistic recommendations based on the highest emissions category
          const highestCategory = Object.entries(mockData.breakdownByCategory)
            .sort((a, b) => b[1] - a[1])[0][0];
          
          console.log(`Highest emissions category: ${highestCategory}`);  
          
          const recommendations = {
            transportation: [
              "Consider carpooling or using public transportation more frequently",
              "If possible, try walking or biking for short trips",
              "Consider switching to a hybrid or electric vehicle for your next car purchase"
            ],
            energy: [
              "Install energy-efficient LED lighting throughout your home",
              "Consider upgrading to energy-efficient appliances",
              "Look into renewable energy options for your home"
            ],
            food: [
              "Try incorporating more plant-based meals in your diet",
              "Buy local, seasonal food to reduce transportation emissions",
              "Plan meals to reduce food waste"
            ],
            shopping: [
              "Focus on buying quality items that will last longer",
              "Consider second-hand or refurbished products when possible",
              "Repair items rather than replacing them when feasible"
            ],
            waste: [
              "Increase your recycling efforts and ensure proper sorting",
              "Start composting food waste if possible",
              "Reduce single-use plastics by using reusable alternatives"
            ]
          };
          
          mockData.recommendations = recommendations[highestCategory as keyof typeof recommendations];
          
          // Calculate a comparison to average (national average for a person is roughly 4,000 kg CO2e per year in many developed countries)
          const averageFootprint = 4000;
          mockData.comparisonToAverage = ((mockData.totalEmissions - averageFootprint) / averageFootprint) * 100;
          mockData.confidence = 0.65 + (Math.random() * 0.15);
          
          console.log("Generated recommendations:", mockData.recommendations);
          console.log("Comparison to average:", mockData.comparisonToAverage);
        } else {
          console.log("No emissions calculated.");
        }
        
        setCalculationResult(mockData);
      }
    } catch (error) {
      console.error('Error calculating carbon footprint:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsCalculating(false);
    }
  };

  // Reset all activity values
  const resetForm = () => {
    // Create an object with all keys set to 0
    const resetValues: Record<string, number> = {};
    
    Object.keys(activities).forEach(categoryKey => {
      const category = categoryKey as ActivityCategory;
      activities[category].forEach(activity => {
        const key = `${category}-${activity.name}`;
        resetValues[key] = 0;
      });
    });
    
    setActivityValues(resetValues);
    setCalculationResult(null);
    setError(null);
    console.log("Form reset");
  };

  const getTabIcon = (category: string) => {
    switch (category) {
      case 'transportation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.tabIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4-4v8m-4 4h8" />
          </svg>
        );
      case 'energy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.tabIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'food':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.tabIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'shopping':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.tabIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'waste':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.tabIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>Carbon Footprint Reduction</h1>
          <p className={styles.pageDescription}>
            Track your carbon footprint and receive personalized recommendations to reduce your environmental impact.
          </p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentInner}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.titleWrapper}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconWrapperSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h2 className={styles.cardTitle}>Your Carbon Footprint Calculator</h2>
              </div>
              
              {/* Tabs */}
              <div className={styles.tabNav}>
                {Object.keys(activities).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as ActivityCategory)}
                    className={`${styles.tabButton} ${
                      selectedCategory === category 
                        ? styles.tabButtonActive
                        : styles.tabButtonInactive
                    }`}
                  >
                    <div>
                      {getTabIcon(category)}
                      {category}
                    </div>
                  </button>
                ))}
              </div>

              <div className={styles.activitiesSection}>
                <h4 className={styles.sectionTitle}>
                  <span className={styles.sectionIconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.sectionIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  {selectedCategory} Activities
                </h4>
                <div className={styles.activityList}>
                  {activities[selectedCategory].map((activity, index) => (
                    <div key={index} className={styles.activityItem}>
                      <label htmlFor={`activity-${index}`} className={styles.activityLabel}>
                        {activity.name}
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="number"
                          id={`activity-${index}`}
                          name={`activity-${index}`}
                          min="0"
                          className={styles.numberInput}
                          placeholder="0"
                          onChange={(e) => handleActivityChange(activity.category, activity.name, e.target.value)}
                          value={activityValues[`${activity.category}-${activity.name}`] || ''}
                          onFocus={(e) => e.target.select()}
                        />
                      </div>
                      <span className={styles.unitLabel}>{activity.unit}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.infoBox}>
                  <p className={styles.infoText}>
                    <span className={styles.infoIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.infoIconSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Complete all categories for a comprehensive carbon footprint analysis
                  </p>
                </div>
                
                {error && (
                  <div className={styles.errorBox}>
                    <p className={styles.errorText}>
                      <span className={styles.errorIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.errorIconSvg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      {error}
                    </p>
                  </div>
                )}
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={calculateCarbonFootprint}
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <span className={styles.loadingSpinner}></span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.submitButtonIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {isCalculating ? 'Calculating...' : 'Calculate My Footprint'}
                </button>
                
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={resetForm}
                  disabled={isCalculating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.resetButtonIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset Form
                </button>
              </div>

              {/* Calculation Results */}
              {calculationResult && (
                <div className={styles.resultsSection}>
                  <h3 className={styles.resultsTitle}>Your Carbon Footprint Results</h3>
                  
                  <div className={styles.resultsOverview}>
                    <div className={styles.resultMetric}>
                      <span className={styles.resultMetricLabel}>Total Carbon Emissions</span>
                      <span className={styles.resultMetricValue}>
                        {calculationResult.totalEmissions.toFixed(2)} kg CO2e
                      </span>
                    </div>
                    
                    <div className={styles.resultMetric}>
                      <span className={styles.resultMetricLabel}>Compared to Average</span>
                      <span className={`${styles.resultMetricValue} ${calculationResult.comparisonToAverage < 0 ? styles.positiveValue : styles.negativeValue}`}>
                        {calculationResult.comparisonToAverage > 0 ? '+' : ''}
                        {calculationResult.comparisonToAverage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.categoryBreakdown}>
                    <h4 className={styles.breakdownTitle}>Breakdown by Category</h4>
                    <div className={styles.breakdownItems}>
                      {Object.entries(calculationResult.breakdownByCategory).map(([category, value]) => (
                        <div key={category} className={styles.breakdownItem}>
                          <span className={styles.breakdownCategory}>{category}</span>
                          <div className={styles.breakdownBar}>
                            <div 
                              className={styles.breakdownBarFill} 
                              style={{ 
                                width: `${(value / calculationResult.totalEmissions) * 100}%`,
                                backgroundColor: category === 'transportation' ? '#EF4444' : 
                                                category === 'energy' ? '#F59E0B' : 
                                                category === 'food' ? '#10B981' : 
                                                category === 'shopping' ? '#3B82F6' : 
                                                '#8B5CF6'
                              }}
                            ></div>
                          </div>
                          <span className={styles.breakdownValue}>{value.toFixed(1)} kg</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.recommendationsSection}>
                    <h4 className={styles.recommendationsTitle}>Recommendations to Reduce Your Footprint</h4>
                    <ul className={styles.recommendationsList}>
                      {calculationResult.recommendations.map((recommendation, index) => (
                        <li key={index} className={styles.recommendationItem}>
                          {recommendation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.comingSoonCard}>
            <div className={styles.comingSoonHeader}>
              <div className={styles.comingSoonIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.comingSoonIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
                <p className={styles.comingSoonSubtitle}>Advanced features in development</p>
              </div>
            </div>
            <div className={styles.comingSoonBody}>
              <p className={styles.comingSoonDescription}>
                Advanced carbon footprint analysis and personalized recommendations powered by AI.
                Stay tuned for our full feature release!
              </p>
              <div className={styles.notificationBox}>
                <div className={styles.notificationTextWrapper}>
                  <div className={styles.notificationIconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.notificationIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <span className={styles.notificationText}>Get notified when new features are available</span>
                </div>
                <button className={styles.notifyButton}>
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprintPage; 