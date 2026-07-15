import React from 'react';
import EngineeringProcess from '../../components/sections/EngineeringProcess';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import CTASection from '../../components/sections/CTASection';
import SEO from '../../components/SEO';

const PlantUpgrades = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Plant Upgrades & Modernization | Salvin Projects"
        description="Upgrade your existing manufacturing plants with the latest technology to increase capacity and reduce downtime."
        keywords="plant upgrades, plant modernization, manufacturing expansion, machinery upgrades"
      />
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Plant Upgrades & Modernization</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming legacy manufacturing facilities into highly efficient, automated modern plants with minimal downtime.
          </p>
        </div>
      </div>
      
      <EngineeringProcess />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default PlantUpgrades;
