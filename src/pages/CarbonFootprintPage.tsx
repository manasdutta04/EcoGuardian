import React, { useState } from 'react';
import styles from './CarbonFootprint.module.css';

type ActivityCategory = 'transportation' | 'energy' | 'food' | 'shopping' | 'waste';

interface Activity {
  category: ActivityCategory;
  name: string;
  value: number;
  unit: string;
}

const CarbonFootprintPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('transportation');

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
              </div>

              <div className={styles.buttonWrapper}>
                <button
                  type="button"
                  className={styles.submitButton}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.submitButtonIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calculate My Footprint
                </button>
              </div>
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