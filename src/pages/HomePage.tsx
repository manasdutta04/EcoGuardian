import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 mix-blend-multiply"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-fixed bg-center"></div>
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-4 h-4 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full top-3/4 left-1/3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-1/3 left-2/3 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-5 h-5 bg-white rounded-full top-2/3 left-3/4 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
              <span className="block">EcoGuardian</span>
              <span className="block text-2xl mt-2 font-semibold text-white/90">AI-Powered Nature Conservation Assistant</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-white/90 sm:max-w-3xl animate-fade-in" style={{animationDelay: '0.2s'}}>
              Join us in protecting our planet through advanced AI technology and community engagement.
              Monitor habitats, track species, reduce carbon footprints, and participate in reforestation efforts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link
                to="/habitat-monitoring"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/community"
                className="px-8 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/20 transition-all duration-300 md:text-lg backdrop-blur-sm"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Overview - Card-based approach */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl relative inline-block">
              Our Features
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="mt-8 max-w-2xl text-xl text-gray-500 mx-auto">
              Leveraging AI technology to protect and preserve our natural ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Feature Cards */}
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: 'Habitat Monitoring',
                description: 'Upload photos and data to assess ecological conditions and identify environmental threats.',
                link: '/habitat-monitoring'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
                title: 'Species Tracking',
                description: 'Identify species and track population trends through image recognition and AI analysis.',
                link: '/species-tracking'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: 'Carbon Footprint',
                description: 'Analyze your daily activities and receive personalized recommendations to reduce your carbon footprint.',
                link: '/carbon-footprint'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Reforestation Planning',
                description: 'Analyze deforested areas and get recommendations for optimal reforestation strategies.',
                link: '/reforestation'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="group bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-24 bg-gradient-to-r from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="rounded-lg p-3 z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-all duration-300"
                  >
                    Learn more
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-16 bg-gray-50 relative">
        {/* Diagonal top divider */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white clip-diagonal"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block">
              About EcoGuardian
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="mt-8 max-w-2xl text-xl text-gray-500 mx-auto">
              Leveraging advanced AI tools to promote environmental conservation.
            </p>
          </div>

          <div className="mt-10">
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-lg text-gray-700">
                  EcoGuardian uses advanced AI to process multimodal data uploaded by users to identify environmental threats. Our platform allows for habitat monitoring, species tracking, carbon footprint reduction, and reforestation planning, all powered by cutting-edge technology.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  Our community engagement dashboard connects like-minded individuals and organizations working towards a sustainable future. Join us in making a difference for our planet.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Powered by AI', value: '100%' },
                    { label: 'Species Identified', value: '5,000+' },
                    { label: 'Community Members', value: '10,000+' },
                    { label: 'Environmental Impact', value: 'Growing' }
                  ].map((stat, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 md:mt-0 space-y-4">
                {[
                  { text: 'Powered by advanced AI technologies' },
                  { text: 'Real-time analysis of environmental data' },
                  { text: 'Community-driven conservation efforts' },
                  { text: 'Personalized recommendations for sustainable living' }
                ].map((item, index) => (
                  <div key={index} className="flex p-5 bg-white rounded-lg shadow-md transform transition-all duration-300 hover:-translate-x-1 hover:shadow-lg">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-4 text-lg text-gray-700 my-auto">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-extrabold sm:text-5xl mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Join thousands of environmentalists using EcoGuardian to protect our planet through technology and community action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/habitat-monitoring"
              className="px-8 py-4 text-base font-medium rounded-full bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:text-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/community"
              className="px-8 py-4 text-base font-medium rounded-full border-2 border-white text-white hover:bg-white/20 transition-all duration-300 md:text-lg backdrop-blur-sm"
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