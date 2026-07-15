import React from 'react';
import SEO from '../../components/SEO';
import FeaturedServices from '../../components/sections/FeaturedServices';
import CTASection from '../../components/sections/CTASection';

const EngineeringExpertise = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <SEO 
        title="Engineering Expertise | Salvin Projects"
        description="World-class engineering expertise in process design, mechanical engineering, and industrial automation."
        keywords="engineering expertise, mechanical engineering, process design, 3D modeling, technical consultancy"
      />
      {/* Hero Section */}
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Engineering Expertise</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive EPC and engineering solutions tailored for the world's most demanding industrial environments.
          </p>
        </div>
      </div>
      
      {/* The Section the user requested */}
      <FeaturedServices />
      
      <CTASection />
    </div>
  );
};

export default EngineeringExpertise;
