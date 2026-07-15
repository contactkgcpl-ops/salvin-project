import React from 'react';
import EngineeringProcess from '../../components/sections/EngineeringProcess';
import FeaturedProjects from '../../components/sections/FeaturedProjects';
import TrustedBy from '../../components/sections/TrustedBy';
import CTASection from '../../components/sections/CTASection';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, Cog, Wrench, BarChart } from 'lucide-react';
import SEO from '../../components/SEO';

const TurnkeyPlantSetup = () => {
  return (
    <div className="w-full font-sans">
      <SEO 
        title="Turnkey Plant Setup | Salvin Projects"
        description="Comprehensive turnkey plant setup services from conceptual design to full commissioning and validation."
        keywords="turnkey plant setup, conceptual design, engineering, procurement, commissioning"
      />
      
      <div className="bg-[#0B1F35] pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Turnkey Plant Setup</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            End-to-end execution of large-scale industrial projects. We manage everything from initial plant layout to final commissioning.
          </p>
        </div>
      </div>
      
      <EngineeringProcess />
      <FeaturedProjects />
      <TrustedBy />
      <CTASection />
    </div>
  );
};

export default TurnkeyPlantSetup;
