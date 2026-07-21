import React from 'react';
import CompanyOverview from '../../components/sections/CompanyOverview';
import ClientReviews from '../../components/sections/ClientReviews';

import SEO from '../../components/SEO';

const ProcessEngineering = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Plant Design & Engineering | Salvin Projects"
        description="Expert engineering for plant setup, maximizing yield, efficiency, and safety in manufacturing."
        keywords="plant setup engineering, manufacturing plant design, process engineering for plants"
      />
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Process Engineering & Consulting</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert engineering consultation to design highly efficient process workflows, optimize facility layouts, and ensure compliance.
          </p>
        </div>
      </div>
      
      <CompanyOverview />
      <ClientReviews />

    </div>
  );
};

export default ProcessEngineering;
