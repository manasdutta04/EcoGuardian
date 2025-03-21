import React, { useState } from 'react';
import FileUploader from '../components/common/FileUploader';

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
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Habitat Monitoring</h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload images of natural habitats to receive AI-powered analysis of ecological conditions, 
            threats, and conservation recommendations. Our system uses advanced image recognition to 
            identify habitat types, assess health status, and detect potential environmental issues.
          </p>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="habitat-image" className="block text-sm font-medium text-gray-700">
                      Upload Habitat Image
                    </label>
                    <FileUploader 
                      onFileSelect={handleFileSelect}
                      acceptedFileTypes="image/*"
                      label="Upload a habitat image"
                    />
                  </div>

                  <div>
                    <label htmlFor="location-data" className="block text-sm font-medium text-gray-700">
                      Location Information (optional)
                    </label>
                    <div className="mt-1">
                      <input
                        id="location-data"
                        name="location-data"
                        type="text"
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-2"
                        placeholder="e.g., Coordinates, Location Name, or Region"
                        value={locationData}
                        onChange={(e) => setLocationData(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="habitat-type" className="block text-sm font-medium text-gray-700">
                      Habitat Type (optional)
                    </label>
                    <div className="mt-1">
                      <select
                        id="habitat-type"
                        name="habitat-type"
                        className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-2"
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
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
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
                      className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                        !selectedFile || isAnalyzing
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      }`}
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Habitat'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Analysis Results Section */}
          {analysisResult && (
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Habitat Analysis Results</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  AI-generated assessment with {(analysisResult.confidence * 100).toFixed(1)}% confidence.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">HABITAT TYPE</h4>
                    <p className="mt-1 text-lg text-gray-900">{analysisResult.habitatType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">HEALTH STATUS</h4>
                    <p className="mt-1 text-lg text-gray-900">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          analysisResult.healthStatus === 'Good'
                            ? 'bg-green-100 text-green-800'
                            : analysisResult.healthStatus === 'Moderate'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {analysisResult.healthStatus}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500">DETECTED THREATS</h4>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {analysisResult.threats.map((threat, index) => (
                      <li key={index} className="text-gray-900">
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500">RECOMMENDATIONS</h4>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {analysisResult.recommendations.map((recommendation, index) => (
                      <li key={index} className="text-gray-900">
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500 italic">
                    This analysis was generated using AI technology and should be verified by local ecological experts. 
                    For more accurate results, consider providing additional images and location data.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitatMonitoringPage; 