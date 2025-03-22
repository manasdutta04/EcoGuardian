import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section with Background Image */}
      <section className={styles.heroSection}>
        {/* Background gradient overlay */}
        <div className={styles.heroGradientOverlay}></div>
        
        {/* Background pattern */}
        <div className={styles.heroBackgroundImage}></div>
        
        {/* Animated particles effect */}
        <div className={styles.animatedParticles}>
          <div className={`${styles.particle} ${styles.particle1}`}></div>
          <div className={`${styles.particle} ${styles.particle2}`}></div>
          <div className={`${styles.particle} ${styles.particle3}`}></div>
          <div className={`${styles.particle} ${styles.particle4}`}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.textCenter}>
            <h1 className={styles.heroTitle}>
              <span>EcoGuardian</span>
              <span className={styles.heroSubtitle}>AI-Powered Nature Conservation Assistant</span>
            </h1>
            <p className={styles.heroDescription}>
              Join us in protecting our planet through advanced AI technology and community engagement.
              Monitor habitats, track species, reduce carbon footprints, and participate in reforestation efforts.
            </p>
            <div className={styles.buttonGroup}>
              <Link
                to="/habitat-monitoring"
                className={styles.primaryButton}
              >
                Get Started
              </Link>
              <Link
                to="/community"
                className={styles.secondaryButton}
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className={styles.waveDivider}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.waveSvg}>
            <path fill="#ffffff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Overview - Card-based approach */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Features
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionDescription}>
              Leveraging AI technology to protect and preserve our natural ecosystems.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {/* Feature Cards */}
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: 'Habitat Monitoring',
                description: 'Upload photos and data to assess ecological conditions and identify environmental threats.',
                link: '/habitat-monitoring'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
                title: 'Species Tracking',
                description: 'Identify species and track population trends through image recognition and AI analysis.',
                link: '/species-tracking'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: 'Carbon Footprint',
                description: 'Analyze your daily activities and receive personalized recommendations to reduce your carbon footprint.',
                link: '/carbon-footprint'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Reforestation Planning',
                description: 'Analyze deforested areas and get recommendations for optimal reforestation strategies.',
                link: '/reforestation'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Community Engagement',
                description: 'Connect with other environmentalists and participate in local conservation projects.',
                link: '/community'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={styles.featureCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderOverlay}></div>
                  <div className={styles.cardIconWrapper}>
                    {feature.icon}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                  <Link
                    to={feature.link}
                    className={styles.cardLink}
                  >
                    Learn more
                    <svg className={styles.cardLinkIcon} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section With Statistics */}
      <section className={styles.aboutSection}>
        {/* Diagonal top divider */}
        <div className={styles.diagonalDivider}></div>
        
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              About EcoGuardian
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionDescription}>
              Leveraging advanced AI tools to promote environmental conservation.
            </p>
          </div>

          <div className={styles.aboutContentWrapper}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <p className={styles.aboutText}>
                  EcoGuardian uses advanced AI to process multimodal data uploaded by users to identify environmental threats. Our platform allows for habitat monitoring, species tracking, carbon footprint reduction, and reforestation planning, all powered by cutting-edge technology.
                </p>
                <p className={`${styles.aboutText} ${styles.aboutTextMargin}`}>
                  Our community engagement dashboard connects like-minded individuals and organizations working towards a sustainable future. Join us in making a difference for our planet.
                </p>

                <div className={styles.statsGrid}>
                  {[
                    { label: 'Powered by AI', value: '100%' },
                    { label: 'Species Identified', value: '5,000+' },
                    { label: 'Community Members', value: '10,000+' },
                    { label: 'Environmental Impact', value: 'Growing' }
                  ].map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.featureList}>
                {[
                  { text: 'Powered by advanced AI technologies' },
                  { text: 'Real-time analysis of environmental data' },
                  { text: 'Community-driven conservation efforts' },
                  { text: 'Personalized recommendations for sustainable living' }
                ].map((item, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.featureIconWrapper}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className={styles.featureText}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        {/* Background animated elements */}
        <div className={styles.ctaBackgroundElements}>
          <div className={styles.ctaCircle1}></div>
          <div className={styles.ctaCircle2}></div>
        </div>
        
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Make a Difference?
          </h2>
          <p className={styles.ctaDescription}>
            Join thousands of environmentalists using EcoGuardian to protect our planet through technology and community action.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link
              to="/habitat-monitoring"
              className={styles.ctaPrimaryButton}
            >
              Get Started Now
            </Link>
            <Link
              to="/community"
              className={styles.ctaSecondaryButton}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 