import React from 'react';
import FileUploader from '../components/common/FileUploader';

const SpeciesTrackingPage: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Implement species identification logic
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Species Tracking</h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload images or recordings of wildlife to identify species and track population trends.
            Our AI technology can recognize thousands of species and provide valuable insights about their
            conservation status and population health.
          </p>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upload Wildlife Image</h3>
              <div className="mt-5">
                <FileUploader 
                  onFileSelect={handleFileSelect}
                  acceptedFileTypes="image/*"
                  label="Upload a wildlife image"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                For best results, ensure the species is clearly visible in the image.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              Advanced species tracking features are currently under development. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesTrackingPage; 