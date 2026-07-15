import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const IndustriesWeServe = () => {
  const navigate = useNavigate();
  const industries = [
    {
      title: "Food & Spices",
      image: "/slider-3.png",
      size: "large",
      path: "/industries/food-and-spices"
    },
    {
      title: "Pharmaceutical",
      image: "/slider-2.png",
      size: "normal",
      path: "/industries/pharmaceutical"
    },
    {
      title: "Chemical & API",
      image: "/chemical-api.png",
      size: "normal",
      path: "/industries/chemical-and-api"
    },
    {
      title: "Beverage",
      image: "/slider-1.png",
      size: "small",
      path: "/industries/beverage"
    },
    {
      title: "Cosmetics",
      image: "/export.png", 
      size: "large",
      path: "/industries/cosmetics"
    },
    {
      title: "Engineering Expertise",
      image: "/cosmetics.png", 
      size: "normal",
      path: "/industries/engineering-expertise"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h4 className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm">Target Markets</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight">
              Industries We Elevate
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-lg md:text-right"
          >
            Providing highly specialized, tailored engineering solutions across diverse industrial sectors to maximize efficiency and output.
          </motion.p>
        </div>

        {/* Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => navigate(industry.path)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                industry.size === 'large' ? 'md:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              ></div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35]/90 via-[#0B1F35]/40 to-transparent transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[#F47A20]/80 opacity-0 group-hover:opacity-90 mix-blend-multiply transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {industry.title}
                </h3>
                
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 text-white font-medium opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 mt-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
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
