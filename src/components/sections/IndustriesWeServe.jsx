import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IndustriesWeServe = () => {
  const navigate = useNavigate();
  const industries = [
    {
      title: "Food & Spices",
      image: "/slider-3.webp",
      path: "/industries/food-and-spices",
      desc: "Advanced processing lines for optimal hygiene and efficiency."
    },
    {
      title: "Pharmaceutical",
      image: "/slider-2.webp",
      path: "/industries/pharmaceutical",
      desc: "Sterile environments and precision engineering."
    },
    {
      title: "Chemical & API",
      image: "/chemical-api.webp",
      path: "/industries/chemical-and-api",
      desc: "Robust equipment for complex chemical processing."
    },
    {
      title: "Beverage",
      image: "/slider-1.webp",
      path: "/industries/beverage",
      desc: "Automated bottling and liquid filling solutions."
    },
    {
      title: "Cosmetics",
      image: "/export.webp", 
      path: "/industries/cosmetics",
      desc: "Specialized mixing and packaging machinery."
    },
    {
      title: "Engineering Expertise",
      image: "/cosmetics.webp", 
      path: "/industries/engineering-expertise",
      desc: "Custom turnkey project design and execution."
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F47A20]/10 text-[#F47A20] font-semibold text-sm mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F47A20]"></span>
              Target Markets
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight tracking-tight">
              Our Core Industries
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md md:text-right text-lg leading-relaxed"
          >
            Delivering highly specialized, tailored engineering solutions across diverse industrial sectors.
          </motion.p>
        </div>

        {/* Uniform Grid Layout to ensure all cards are same size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => navigate(industry.path)}
              className="relative group cursor-pointer h-full flex flex-col"
            >
              <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group-hover:border-gray-200 group-hover:-translate-y-1 transition-transform duration-300">
                
                {/* Full width/height image container without space */}
                <div className="relative w-full h-64 overflow-hidden border-b border-gray-100">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                  />
                  {/* Subtle overlay gradient for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                
                {/* Text Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0B1F35] mb-3 group-hover:text-[#F47A20] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-500 mb-6 line-clamp-2 flex-grow">
                    {industry.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#0B1F35] font-semibold group-hover:text-[#F47A20] transition-colors duration-300 mt-auto">
                    <span className="text-sm tracking-wide">Explore</span>
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
