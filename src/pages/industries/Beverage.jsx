import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Zap, Droplet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EquipmentGrid from '../../components/ui/EquipmentGrid';
import SEO from '../../components/SEO';

const Beverage = () => {
  const equipment = [
    {
      id: "01",
      name: "Syrup Blending Tanks",
      description: "Jacketed stainless steel blending tanks (CAP - 2000 LTR) for the precise formulation and preparation of beverage syrups.",
      image: "/images/beverage-blending.jpg"
    },
    {
      id: "02",
      name: "Flavor Emulsification",
      description: "Vacuum emulsification vessels (Step-02) engineered to perfectly mix and homogenize diverse fruit flavors and beverage bases.",
      image: "/images/beverage-emulsification.jpg"
    },
    {
      id: "03",
      name: "Pasteurization Systems",
      description: "Advanced tube holding and pasteurization units that rapidly heat-treat beverages to ensure extended shelf-life and absolute safety.",
      image: "/images/beverage-pasteurization.jpg"
    },
    {
      id: "04",
      name: "Automatic Liquid Filling",
      description: "High-speed rotary filling machines precisely dispensing flavored drinks into PET bottles with zero spillage.",
      image: "/images/beverage-filling.jpg"
    },
    {
      id: "05",
      name: "Capping & Labeling",
      description: "Integrated automated capping stations and precision labeling lines (Step-05) ensuring flawless bottle presentation.",
      image: "/images/beverage-capping.jpg"
    },
    {
      id: "06",
      name: "Shrink Wrapping & Packaging",
      description: "End-of-line packaging automation with shrink tunnels that tightly bundle multiple bottles into ready-to-ship retail packs.",
      image: "/images/beverage-shrink.jpg"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] font-sans">
      <SEO 
        title="Beverage Processing & Bottling | Salvin Projects"
        description="High-speed beverage processing and bottling solutions for juices, carbonated drinks, and dairy products."
        keywords="beverage processing plant, bottling line automation, juice processing, dairy plant setup"
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-[#0B1F35] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/beverage-hero-bg.png')] bg-cover bg-center opacity-40 blur-[2px] scale-105"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#F47A20] font-bold tracking-widest uppercase mb-4 text-sm">Industrial Expertise</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Beverage Bottling & Packing</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              High-speed automated liquid filling and bottling solutions designed for maximum efficiency and pristine hygiene.
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
                Automated <span className="text-[#F47A20]">Bottling</span> Solution
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Salvin Projects' Beverage Bottling plants are high-speed, synchronized turnkey solutions engineered for carbonated drinks, juices, liquor, and bottled water. Our lines seamlessly integrate everything from bottle rinsing and liquid filling to capping and shrink packaging.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Built to operate at breathtaking speeds while preventing product loss, our automated systems feature built-in CIP (Clean-In-Place) technology to ensure sanitary liquid handling, reducing downtime between beverage flavor changeovers.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">High Speed Output</h4>
                  </div>
                  <p className="text-sm text-gray-500">Rotary lines capable of hundreds of bottles per minute.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">No-Spill Tech</h4>
                  </div>
                  <p className="text-sm text-gray-500">Precision filling valves eliminate foaming and waste.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplet className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">CIP Integrated</h4>
                  </div>
                  <p className="text-sm text-gray-500">Automated internal cleaning guarantees beverage hygiene.</p>
                </div>
                
                <div className="p-5 border border-gray-100 rounded-xl bg-[#FAFAFA] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Factory className="w-5 h-5 text-[#F47A20]" />
                    <h4 className="font-bold text-[#0B1F35]">Versatile Formatting</h4>
                  </div>
                  <p className="text-sm text-gray-500">Easily switch between glass, PET, and various bottle sizes.</p>
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
                  src="/images/beverage-overview.jpg" 
                  alt="Beverage Plant Operations" 
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
              From calculating flow rates to final bottle testing, we manage every step of your beverage plant setup to guarantee high-speed success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Capacity & Layout", desc: "We design a streamlined 3D conveyor layout optimized for your target Bottles-Per-Minute (BPM)." },
              { num: "02", title: "Rotary Fabrication", desc: "Monoblock filler machines are manufactured with precision SS304 valves in our facility." },
              { num: "03", title: "Line Integration", desc: "We deploy the full line, ensuring perfect synchronization between rinsing, filling, and capping." },
              { num: "04", title: "Speed Trials & Handover", desc: "Extensive wet trials run at maximum speed to guarantee zero spillage before client handover." }
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
            Consult with our process engineers to design a high-speed bottling and beverage line tailored to your specific product and capacity.
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

export default Beverage;
