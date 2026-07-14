import React from 'react';
import FeaturedServices from '../components/sections/FeaturedServices';
import CTASection from '../components/sections/CTASection';

const Services = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Turnkey Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive EPC and engineering solutions tailored for the world's most demanding industrial environments.
          </p>
        </div>
      </div>
      
      <FeaturedServices />
      <CTASection />
    </div>
  );
};

export default Services;
