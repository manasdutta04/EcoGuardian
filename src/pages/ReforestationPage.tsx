import React from 'react';
import FileUploader from '../components/common/FileUploader';

const ReforestationPage: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Implementation for analyzing deforested areas would go here
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Reforestation Planning</h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload satellite imagery or photos of deforested areas to receive AI-powered recommendations for 
            optimal reforestation strategies. Our system analyzes soil conditions, climate data, and local 
            biodiversity to suggest the most suitable tree species and planting patterns.
          </p>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upload Area Image</h3>
              <div className="mt-5">
                <FileUploader 
                  onFileSelect={handleFileSelect}
                  acceptedFileTypes="image/*"
                  label="Upload a satellite image or photo of the deforested area"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                For best results, provide high-resolution satellite imagery or aerial photographs.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Location Information
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="coordinates" className="block text-sm font-medium text-gray-700">
                    Coordinates (if known)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="coordinates"
                      id="coordinates"
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      placeholder="e.g., 40.7128° N, 74.0060° W"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="area-size" className="block text-sm font-medium text-gray-700">
                    Area Size (if known)
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="area-size"
                      id="area-size"
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-l-md p-2"
                      placeholder="e.g., 100"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      hectares
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                    Region/Country
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-2"
                      placeholder="e.g., Amazon Basin, Brazil"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="climate" className="block text-sm font-medium text-gray-700">
                    Climate Type (if known)
                  </label>
                  <div className="mt-1">
                    <select
                      id="climate"
                      name="climate"
                      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-2"
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
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Generate Reforestation Plan
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              Our AI-powered reforestation planning tool is currently under development.
              Soon you'll be able to receive detailed reforestation strategies tailored to specific regions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReforestationPage; 