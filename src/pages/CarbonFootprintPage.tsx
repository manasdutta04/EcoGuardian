import React, { useState } from 'react';

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

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Carbon Footprint Reduction</h1>
          <p className="text-lg text-gray-600 mb-8">
            Track your carbon footprint and receive personalized recommendations to reduce your environmental impact. 
            Our AI-driven tool analyzes your daily activities and suggests practical changes to live more sustainably.
          </p>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Your Carbon Footprint Calculator</h3>
              
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {Object.keys(activities).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category as ActivityCategory)}
                      className={`
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize
                        ${selectedCategory === category 
                          ? 'border-primary text-primary' 
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-900 capitalize mb-4">{selectedCategory} Activities</h4>
                <div className="space-y-4">
                  {activities[selectedCategory].map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <label htmlFor={`activity-${index}`} className="block w-1/3 text-sm font-medium text-gray-700">
                        {activity.name}
                      </label>
                      <div className="w-1/3">
                        <input
                          type="number"
                          id={`activity-${index}`}
                          name={`activity-${index}`}
                          min="0"
                          className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md p-2"
                          placeholder="0"
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{activity.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">Complete all categories for a comprehensive carbon footprint analysis</p>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Calculate My Footprint
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              Advanced carbon footprint analysis and personalized recommendations powered by AI.
              Stay tuned for our full feature release!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprintPage; 