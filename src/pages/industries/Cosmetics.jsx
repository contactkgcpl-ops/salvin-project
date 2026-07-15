import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Zap, Droplet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EquipmentGrid from '../../components/ui/EquipmentGrid';
import SEO from '../../components/SEO';

const Cosmetics = () => {
  const equipment = [
    {
      id: "01",
      name: "Raw Material Preparation",
      description: "Automated preparation tanks for precisely weighing, mixing, and melting raw ingredients like glycerin, stearic acid, and oils.",
      image: "/images/cosmetics-raw.jpg"
    },
    {
      id: "02",
      name: "Vacuum Emulsification",
      description: "Advanced vacuum homogenizers (Step-02) engineered to create perfectly smooth, bubble-free face creams and lotions.",
      image: "/images/cosmetics-emulsification.jpg"
    },
    {
      id: "03",
      name: "High-Speed Cream Mixers",
      description: "High-capacity cream mixers (Step-03) designed to vigorously blend high-viscosity gels, night creams, and body scrubs.",
      image: "/images/cosmetics-mixer.jpg"
    },
    {
      id: "04",
      name: "Automatic Filling Machines",
      description: "High-precision rotary filling systems (Step-04) for hygienically dispensing serums, face washes, and lotions into bottles.",
      image: "/images/cosmetics-filling.jpg"
    },
    {
      id: "05",
      name: "Bottle Capping & Labeling",
      description: "Automated high-speed capping and wrap-around labeling lines (Step-05) for flawless presentation of cosmetic bottles.",
      image: "/images/cosmetics-capping.jpg"
    },
    {
      id: "06",
      name: "Turnkey Plant Integration",
      description: "Complete manufacturing integration connecting emulsification tanks to final packaging conveyors for continuous production.",
      image: "/images/cosmetics-turnkey.jpg"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] font-sans">
      <SEO 
        title="Cosmetics & Personal Care Manufacturing | Salvin Projects"
        description="Premium automated manufacturing lines for cosmetics, creams, lotions, and personal care products."
        keywords="cosmetics manufacturing plant, personal care production, mixing vessels, cream filling machine"
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-[#0B1F35] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cosmetics-hero-bg.png')] bg-cover bg-center opacity-40 blur-[2px] scale-105"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#F47A20] font-bold tracking-widest uppercase mb-4 text-sm">Industrial Expertise</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cosmetics & Personal Care</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Specialized turnkey engineering for premium creams, lotions, and liquid cosmetics, ensuring perfect emulsions and filling accuracy.
            </p>
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
                Cosmetic <span className="text-[#F47A20]">Processing</span> Solution
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Salvin Projects' Cosmetics Manufacturing plants are advanced, fully automated turnkey solutions engineered for producing high-quality personal care products. Our lines master the complex science of blending oils, waxes, and water into perfect emulsions.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Built with strictly hygienic SS316L contact parts, our systems ensure zero-aeration mixing, highly precise viscosity control, and extremely accurate filling into luxury jars, bottles, or tubes without damaging the product structure.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplet className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Homogeneous Blending</h4>
                  </div>
                  <p className="text-sm text-gray-500">Vacuum technology ensures perfectly smooth, bubble-free creams.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Hygienic Pipelines</h4>
                  </div>
                  <p className="text-sm text-gray-500">Crevice-free SS316L prevents bacterial growth and contamination.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Precision Filling</h4>
                  </div>
                  <p className="text-sm text-gray-500">Servo-driven nozzles for highly accurate, clean container fills.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Factory className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Viscosity Control</h4>
                  </div>
                  <p className="text-sm text-gray-500">Engineered to handle both thin liquids and thick pastes effortlessly.</p>
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
                  src="/images/cosmetics-overview.jpg" 
                  alt="Cosmetics Plant Operations" 
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
              From perfecting emulsion physics to fine-tuning nozzle filling, we manage every step of your cosmetics plant setup for premium results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Formulation & Layout", desc: "We study your cosmetic formula viscosity to design the perfect 3D sanitary piping and mixing layout." },
              { num: "02", title: "Hygienic Fabrication", desc: "Vessels are manufactured in-house with ultra-smooth mirror-polished SS316L to prevent sticking." },
              { num: "03", title: "Installation & Automation", desc: "We install the machinery, integrating smart PLC controls for precise heat and mixing cycles." },
              { num: "04", title: "Product Trials & Handover", desc: "We run actual product trials to ensure perfect emulsion and accurate filling before client handover." }
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
            Consult with our process engineers to design a premium cosmetics manufacturing line tailored to your brand's specific formulations.
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

export default Cosmetics;
