import React from 'react';
import EngineeringProcess from '../../components/sections/EngineeringProcess';

import TrustedBy from '../../components/sections/TrustedBy';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, Cog, Wrench, BarChart } from 'lucide-react';
import SEO from '../../components/SEO';

const TurnkeyPlantSetup = () => {
  return (
    <div className="w-full font-sans">
      <SEO 
        title="Complete Turnkey Plant Setup | Salvin Projects"
        description="Comprehensive turnkey project setup services for food, pharma, cosmetic, chemical, and beverage manufacturing."
        keywords="turnkey plant setup, turnkey project setup, factory setup, manufacturing plant installation"
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

      <TrustedBy />

    </div>
  );
};

export default TurnkeyPlantSetup;
