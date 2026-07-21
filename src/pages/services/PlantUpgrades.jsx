import React from 'react';
import EngineeringProcess from '../../components/sections/EngineeringProcess';
import WhyChooseUs from '../../components/sections/WhyChooseUs';

import SEO from '../../components/SEO';

const PlantUpgrades = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Plant Upgrades & Expansion | Salvin Projects"
        description="Upgrade your existing manufacturing plants with our complete project setup services to increase capacity."
        keywords="plant upgrades, plant expansion, manufacturing plant upgrade, turnkey plant expansion"
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

    </div>
  );
};

export default PlantUpgrades;
