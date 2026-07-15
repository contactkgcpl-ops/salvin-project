import React from 'react';
import TrustedBy from '../../components/sections/TrustedBy';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import ClientReviews from '../../components/sections/ClientReviews';
import CTASection from '../../components/sections/CTASection';
import SEO from '../../components/SEO';

const OperationsMaintenance = () => {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="Operations & Maintenance | Salvin Projects"
        description="Reliable operations and maintenance services, including preventive maintenance, spares support, and troubleshooting."
        keywords="plant maintenance, preventive maintenance, industrial troubleshooting, OEM spares"
      />
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Operations & Maintenance (O&M)</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive lifecycle support to ensure your industrial plant runs smoothly with maximum uptime and extended asset lifespan.
          </p>
        </div>
      </div>
      
      <TrustedBy />
      <WhyChooseUs />
      <ClientReviews />
      <CTASection />
    </div>
  );
};

export default OperationsMaintenance;
