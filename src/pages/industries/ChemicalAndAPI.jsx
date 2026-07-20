import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Zap, Droplet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EquipmentGrid from '../../components/ui/EquipmentGrid';
import SEO from '../../components/SEO';

const ChemicalAndAPI = () => {
  const equipment = [
    {
      id: "01",
      name: "SS Reaction Vessels",
      description: "High-grade stainless steel reactors (R-105) designed for complex chemical syntheses with precise temperature and pressure controls.",
      image: "/images/chemical-ss-reactor.webp"
    },
    {
      id: "02",
      name: "Industrial Centrifuges",
      description: "Heavy-duty separation systems (C-500) for the rapid and safe extraction of solid API crystals from liquid solvents.",
      image: "/images/chemical-centrifuge.webp"
    },
    {
      id: "03",
      name: "Glass-Lined Reactors",
      description: "Highly chemical-resistant glass-lined steel reactors (GLR-101) engineered to handle highly corrosive acids at extreme temperatures.",
      image: "/images/chemical-glr.webp"
    },
    {
      id: "04",
      name: "Vacuum Tray Dryers (VTD)",
      description: "Thermal-efficient drying systems operating under vacuum to safely extract moisture from heat-sensitive chemical compounds.",
      image: "/images/chemical-vtd.webp"
    },
    {
      id: "05",
      name: "Flash Vessels & Separation",
      description: "Integrated flash vessels (V-201) and storage tanks designed for optimal phase separation and continuous API processing.",
      image: "/images/chemical-flash-vessel.webp"
    },
    {
      id: "06",
      name: "Solvents & Reagents Handling",
      description: "Automated dosing and handling systems for hazardous solvents (Toluene, Methanol, Caustic Soda) ensuring absolute plant safety.",
      image: "/images/chemical-handling.webp"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] font-sans">
      <SEO 
        title="Chemical & API Plant Setup | Turnkey Chemical Projects"
        description="Complete turnkey project setup for chemical plants and API manufacturing."
        keywords="chemical plant setup, API manufacturing plant setup, turnkey chemical project, industrial chemical plant"
      />
      
      {/* Hero Section */}
      <section className="relative pt-52 pb-44 bg-[#0B1F35] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/chemical-hero-bg.webp')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/80 via-[#0B1F35]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F47A20]/30 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#F47A20] font-bold tracking-widest uppercase mb-4 text-sm">Industrial Expertise</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Chemical & API Processing</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Robust, highly specialized process plants built for the safe, scalable, and efficient synthesis of fine chemicals and APIs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-3.5 bg-[#F47A20] text-white font-bold rounded-xl hover:bg-white hover:text-[#0B1F35] transition-colors duration-300 flex items-center gap-2">
                Consult With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:border-white hover:bg-white/10 transition-colors duration-300">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plant Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-[#F47A20] text-xs font-bold tracking-widest uppercase">
              Plant Overview
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-[#0B1F35] mb-4 leading-tight">
                Complete <span className="text-[#F47A20]">API Processing</span> Solution
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Salvin Projects' Chemical & API plants are industrial-grade, fully automated turnkey solutions designed to handle volatile, corrosive, and high-temperature chemical reactions safely and efficiently.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                From bulk reactors and distillation columns to drying and pulverizing, our pipelines and systems are built using premium exotic materials to guarantee corrosion resistance and prevent hazardous leaks, all controlled via centralized DCS automation.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">High Containment</h4>
                  </div>
                  <p className="text-sm text-gray-500">Zero-leak designs for safe handling of hazardous APIs.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplet className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Corrosion Resistant</h4>
                  </div>
                  <p className="text-sm text-gray-500">Glass-lined, Hastelloy, and specialized alloy builds.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Factory className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Yield Optimization</h4>
                  </div>
                  <p className="text-sm text-gray-500">Advanced thermal control limits reaction loss.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Flameproof Systems</h4>
                  </div>
                  <p className="text-sm text-gray-500">ATEX certified electricals for explosive environments.</p>
                </div>
              </div>

            </div>

            {/* Right Image/Diagram */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F35]/5 to-[#F47A20]/5 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="/images/chemical-overview.webp" 
                  alt="Chemical Plant Operations" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      <EquipmentGrid 
        subtitle="Machinery Used"
        title={<span>Core <span className="text-[#F47A20]">Equipment</span></span>}
        equipmentList={equipment}
      />

      {/* Our Process Section */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1F35]/5 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-[#F47A20] text-xs font-bold tracking-widest uppercase mb-4">
              Turnkey Execution
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F35]">
              How We <span className="text-[#F47A20]">Deliver</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              From the initial blueprint to the final batch run, we manage every step of your heavy chemical plant setup to guarantee absolute safety and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "HAZOP & Layout", desc: "Hazard & Operability studies drive our 3D layouts, ensuring plant safety protocols are met." },
              { num: "02", title: "Heavy Fabrication", desc: "Reactors and vessels are forged and glass-lined in our specialized heavy engineering yard." },
              { num: "03", title: "Piping & Automation", desc: "We deploy extensive structural piping networks and integrate DCS flameproof control systems." },
              { num: "04", title: "Hydro-Testing & Go-Live", desc: "Strict pressure and leak testing precedes final chemical trials and client handover." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-[#F47A20]/40 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-2xl font-black text-[#F47A20] mb-6 group-hover:bg-[#F47A20] group-hover:text-white transition-colors duration-300 border border-orange-100 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F35] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
                {idx !== 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 z-20 group-hover:text-[#F47A20] transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B1F35] text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Plant?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Consult with our process engineers to design a heavy-duty chemical processing plant tailored to your exact reactions and capacity requirements.
          </p>
          <Link to="/contact" className="inline-flex px-10 py-4 bg-[#F47A20] text-white font-bold rounded-xl hover:bg-white hover:text-[#0B1F35] transition-colors duration-300 items-center gap-3">
            Request a Technical Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ChemicalAndAPI;
