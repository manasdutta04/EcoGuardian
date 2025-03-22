# EcoGuardian: AI-Powered Nature Conservation Assistant

EcoGuardian is a web-based application designed to promote nature conservation and environmental protection by leveraging advanced AI tools. The project aims to assist individuals, conservation organizations, and policymakers in monitoring, analyzing, and protecting natural ecosystems.

## Features

### 1. Real-Time Habitat Monitoring
Upload photos of various habitats to identify environmental threats and receive conservation recommendations using Google's Gemini vision model.

### 2. Species Population Tracking
Identify wildlife species through image recognition and track population trends using AI analysis powered by Google's multimodal AI technology.

### 3. Carbon Footprint Reduction
Track your daily activities and get personalized recommendations to reduce your environmental impact using Gemini for accurate carbon calculations.

### 4. Reforestation Planning
Analyze deforested areas and receive AI-generated recommendations for optimal reforestation strategies using Vertex AI and geospatial analysis.

### 5. Community Engagement
Connect with other environmentalists, join conservation projects, and share your own initiatives.

### 6. User Authentication
Securely create accounts, sign in with email/password or Google authentication, and protect your conservation data using Firebase Authentication.

## Technology Stack

- **Frontend**: React.js with TypeScript, Tailwind CSS
- **AI Integration**: 
  - Google's Gemini API for multimodal AI processing (vision, text)
  - Vertex AI for advanced machine learning capabilities
  - Google IDX for development environment (optional)
- **Authentication & Backend**:
  - Firebase Authentication for secure user management
  - Firestore Database for storing user data
- **Data Visualization**: Chart.js for tracking and analytics

## Getting Started

### Prerequisites
- Node.js (version 14.0 or higher)
- npm (version 6.0 or higher)
- Google Gemini API key
- Firebase project with Authentication enabled
- (Optional) Google Cloud project with Vertex AI enabled

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ecoguardian.git
cd ecoguardian
```

2. Install the dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.sample .env.local
```
Then edit `.env.local` to add your Google API keys, Firebase credentials, and other settings.

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Google AI Integration

EcoGuardian leverages multiple Google AI technologies to provide powerful environmental analysis:

### Gemini API
Used for multimodal analysis (both image and text) to:
- Analyze habitat images and identify environmental threats
- Identify species from wildlife photographs
- Generate sustainable recommendations based on user data

### Vertex AI
Used for more specialized machine learning tasks:
- Advanced image segmentation for habitat monitoring
- Time-series analysis for tracking environmental changes
- Predictive models for carbon footprint reduction

### Google IDX (Optional)
For developers who want to contribute to the project:
- Cloud-based development environment
- Easy setup and configuration
- Integrated AI assistance for coding

## Firebase Authentication Setup

1. **Create a Firebase Project**:
   - Visit the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Authentication and select Email/Password and Google as sign-in methods

2. **Add Firebase to your Web App**:
   - In Firebase Console, register your app by clicking "Add app" > "Web"
   - Copy the Firebase configuration object
   - Add the Firebase credentials to your `.env.local` file:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

## Setting Up API Keys

1. **Gemini API Key**:
   - Visit [Google AI Studio](https://ai.google.dev/)
   - Create an API key
   - Add it to your `.env.local` file as `REACT_APP_GEMINI_API_KEY`

2. **Vertex AI Setup** (optional):
   - Create a [Google Cloud project](https://console.cloud.google.com/)
   - Enable Vertex AI API
   - Create a service account with appropriate permissions
   - Download the service account key JSON file
   - Configure the paths in your `.env.local` file

## Project Structure

- `src/components/common/`: Reusable UI components
- `src/components/features/`: Feature-specific components
- `src/pages/`: Main application pages including authentication pages
- `src/services/`: API and service integrations including Google AI services
- `src/utils/`: Utility functions
- `src/context/`: React context for state management (Auth, etc.)
- `src/assets/`: Static assets like images
- `src/firebase/`: Firebase configuration and helpers

## Contributing

Contributions to EcoGuardian are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Powered by React, Firebase, and Google's AI technologies (Gemini, Vertex AI)
- Inspired by the urgent need for technological solutions to environmental challenges
