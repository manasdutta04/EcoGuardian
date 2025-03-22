import React, { useState } from 'react';
import styles from './CommunityPage.module.css';
import forestBg from '../assets/images/forest-bg.jpg';

// Fallback image
const fallbackImage = forestBg;

// Mock community projects data
const communityProjects = [
  {
    id: 1,
    title: "Amazon Rainforest Preservation Initiative",
    location: "Brazil",
    category: "Forest Conservation",
    members: 128,
    // Use a gradient color as background if image fails
    image: "https://source.unsplash.com/featured/?rainforest",
    bgColor: "#4ade80",
    description: "A community-driven project focused on preserving the Amazon rainforest through monitoring, education, and sustainable development practices."
  },
  {
    id: 2,
    title: "Great Barrier Reef Monitoring",
    location: "Australia",
    category: "Marine Conservation",
    members: 94,
    image: "https://source.unsplash.com/featured/?coral,reef",
    bgColor: "#3b82f6",
    description: "A collaborative effort to monitor coral health, water quality, and marine life in the Great Barrier Reef using AI-assisted image analysis."
  },
  {
    id: 3,
    title: "Urban Tree Planting Network",
    location: "Global",
    category: "Urban Greening",
    members: 312,
    image: "https://source.unsplash.com/featured/?urban,trees",
    bgColor: "#22c55e",
    description: "Connecting volunteers and organizations to plant trees in urban areas, improving air quality and creating healthier cities worldwide."
  },
  {
    id: 4,
    title: "Wetland Restoration Coalition",
    location: "United States",
    category: "Habitat Restoration",
    members: 76,
    image: "https://source.unsplash.com/featured/?wetland",
    bgColor: "#2563eb",
    description: "Working to restore critical wetland ecosystems that provide natural flood control, water filtration, and habitat for countless species."
  }
];

const CommunityPage: React.FC = () => {
  // State to track image loading errors
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  // Handle image loading error
  const handleImageError = (id: number) => {
    setImgErrors(prev => ({...prev, [id]: true}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Community Engagement</h1>
        <p className={styles.pageDescription}>
          Connect with other environmentalists, join conservation projects, and share your own initiatives.
          Our community platform allows you to collaborate with like-minded individuals and organizations
          working towards a sustainable future.
        </p>

        <div className={styles.conversationCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Join the Conversation</h3>
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.textInput}
                placeholder="Share your thoughts, questions or conservation stories..."
              />
              <button
                type="submit"
                className={styles.postButton}
              >
                Post
              </button>
            </div>

            <div className={styles.tagContainer}>
              <button className={styles.tag}>
                #Conservation
              </button>
              <button className={styles.tag}>
                #ClimateAction
              </button>
              <button className={styles.tag}>
                #Biodiversity
              </button>
              <button className={styles.tag}>
                #Sustainability
              </button>
            </div>
          </div>
        </div>

        <h2 className={styles.projectsTitle}>Conservation Projects</h2>
        <div className={styles.projectsGrid}>
          {communityProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div 
                className={styles.projectImage}
                style={{
                  backgroundColor: imgErrors[project.id] ? project.bgColor : 'transparent',
                }}
              >
                {!imgErrors[project.id] ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className={styles.fallbackImageContainer}>
                    <span>{project.title.split(' ').map(word => word[0]).join('')}</span>
                  </div>
                )}
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectMetaItem}>
                  <svg className={styles.projectMetaIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </div>
                <div className={styles.projectMetaItem}>
                  <svg className={styles.projectMetaIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                  {project.category}
                </div>
                <div className={styles.projectMetaItem}>
                  <svg className={styles.projectMetaIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  {project.members} members
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <button
                  type="button"
                  className={styles.joinButton}
                >
                  Join Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            className={styles.loadMoreButton}
          >
            Load More Projects
          </button>
        </div>

        <div className={styles.comingSoonSection}>
          <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
          <p className={styles.comingSoonDescription}>
            Advanced community features with AI-driven project recommendations and impact tracking.
            Stay tuned for our full community platform launch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 