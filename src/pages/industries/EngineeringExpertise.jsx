import React from 'react';
import SEO from '../../components/SEO';
import FeaturedServices from '../../components/sections/FeaturedServices';


const EngineeringExpertise = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <SEO 
        title="Engineering Expertise | Salvin Projects"
        description="World-class engineering expertise in process design, mechanical engineering, and industrial automation."
        keywords="engineering expertise, mechanical engineering, process design, 3D modeling, technical consultancy"
      />
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' 
          }}
        >
          <div className="absolute inset-0 bg-[#0B1F35]/85 z-10"></div>
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Engineering Expertise</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive EPC and engineering solutions tailored for the world's most demanding industrial environments.
          </p>
        </div>
      </div>
      
      {/* The Section the user requested */}
      <FeaturedServices />
      

    </div>
  );
};

export default EngineeringExpertise;
