import React from 'react';

// Mock community projects data
const communityProjects = [
  {
    id: 1,
    title: "Amazon Rainforest Preservation Initiative",
    location: "Brazil",
    category: "Forest Conservation",
    members: 128,
    image: "https://via.placeholder.com/800x400/4ade80/FFFFFF?text=Amazon+Rainforest",
    description: "A community-driven project focused on preserving the Amazon rainforest through monitoring, education, and sustainable development practices."
  },
  {
    id: 2,
    title: "Great Barrier Reef Monitoring",
    location: "Australia",
    category: "Marine Conservation",
    members: 94,
    image: "https://via.placeholder.com/800x400/3b82f6/FFFFFF?text=Great+Barrier+Reef",
    description: "A collaborative effort to monitor coral health, water quality, and marine life in the Great Barrier Reef using AI-assisted image analysis."
  },
  {
    id: 3,
    title: "Urban Tree Planting Network",
    location: "Global",
    category: "Urban Greening",
    members: 312,
    image: "https://via.placeholder.com/800x400/22c55e/FFFFFF?text=Urban+Tree+Planting",
    description: "Connecting volunteers and organizations to plant trees in urban areas, improving air quality and creating healthier cities worldwide."
  },
  {
    id: 4,
    title: "Wetland Restoration Coalition",
    location: "United States",
    category: "Habitat Restoration",
    members: 76,
    image: "https://via.placeholder.com/800x400/2563eb/FFFFFF?text=Wetland+Restoration",
    description: "Working to restore critical wetland ecosystems that provide natural flood control, water filtration, and habitat for countless species."
  }
];

const CommunityPage: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Community Engagement</h1>
          <p className="text-lg text-gray-600 mb-8">
            Connect with other environmentalists, join conservation projects, and share your own initiatives.
            Our community platform allows you to collaborate with like-minded individuals and organizations
            working towards a sustainable future.
          </p>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Join the Conversation</h3>
              <div className="border-b border-gray-200 pb-5">
                <div className="flex">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 pr-12"
                      placeholder="Share your thoughts, questions or conservation stories..."
                    />
                    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                      <button
                        type="submit"
                        className="inline-flex items-center rounded border border-gray-200 px-2 text-sm font-sans font-medium text-primary hover:bg-gray-100"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap justify-start gap-2">
                  <button className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700 hover:bg-gray-100">
                    #Conservation
                  </button>
                  <button className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700 hover:bg-gray-100">
                    #ClimateAction
                  </button>
                  <button className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700 hover:bg-gray-100">
                    #Biodiversity
                  </button>
                  <button className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700 hover:bg-gray-100">
                    #Sustainability
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conservation Projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-12">
            {communityProjects.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="h-48 w-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{project.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    {project.category}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    {project.members} members
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Join Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Load More Projects
            </button>
          </div>

          <div className="mt-12 text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              Advanced community features with AI-driven project recommendations and impact tracking.
              Stay tuned for our full community platform launch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 