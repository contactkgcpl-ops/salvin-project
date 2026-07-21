import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Placeholder companies
  const companies = [
    { name: "GlobalTech", label: "GLOBAL TECH" },
    { name: "NexusEng", label: "NEXUS ENGINEERING" },
    { name: "SummitInd", label: "SUMMIT INDUSTRIES" },
    { name: "CoreMfg", label: "CORE MFG" },
    { name: "AlphaProc", label: "ALPHA PROCESSING" },
    { name: "PioneerDev", label: "PIONEER DEV" },
  ];

  const certifications = [
    { label: "ISO 9001:2015 CERTIFIED" },
    { label: "MSME REGISTERED" },
    { label: "MAKE IN INDIA" },
    { label: "CE COMPLIANT" },
  ];

  // Duplicate for infinite effect
  const marqueeItems = [...companies, ...companies, ...companies];

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      {/* Certifications Row */}
      <div className="container mx-auto px-6 mb-12 border-b border-gray-100 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {certifications.map((cert, idx) => (
             <div key={idx} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <span className="text-[#F47A20] font-bold text-xl">✓</span>
                </div>
                <span className="font-bold text-[#0B1F35] tracking-wide">{cert.label}</span>
             </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Trusted by Leading Manufacturing Companies Worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
          animate={{ x: [0, -1035] }} // Adjust based on content width roughly
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          {marqueeItems.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[150px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl font-bold text-[#0B1F35] font-sans tracking-tight">
                {company.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
