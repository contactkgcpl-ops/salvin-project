import React from 'react';
import FeaturedProjects from '../../components/sections/FeaturedProjects';
import IndustriesWeServe from '../../components/sections/IndustriesWeServe';
import CTASection from '../../components/sections/CTASection';
import SEO from '../../components/SEO';

const IndustrialAutomation = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Industrial Automation | Salvin Projects"
        description="Cutting-edge industrial automation solutions using SCADA, PLC, and IoT for smart manufacturing."
        keywords="industrial automation, SCADA, PLC programming, smart manufacturing, industry 4.0"
      />
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Industrial Automation Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Designing and deploying state-of-the-art PLC, SCADA, and IoT systems for entire plants to achieve unprecedented production control.
          </p>
        </div>
      </div>
      
      <IndustriesWeServe />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
};

export default IndustrialAutomation;
