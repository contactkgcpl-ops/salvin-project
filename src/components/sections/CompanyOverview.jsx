import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyOverview = () => {
  return (
    <section id="company" className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Asymmetrical Image Layout */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[85%] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="/about-plant.png" 
                alt="Salvin Industrial Plant" 
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-[60%] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="/about-engineers.png" 
                alt="Salvin Engineers" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute top-10 -left-10 w-32 h-32 bg-[#F47A20]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right: Company Info & Counters */}
          <div className="pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm">About Salvin Industries</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] mb-6 leading-tight">
                Executing World-Class <br/> Turnkey Industrial Projects
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over two decades of excellence, Salvin Industries has established itself as a global EPC (Engineering, Procurement, and Construction) leader. We specialize in providing end-to-end turnkey plant solutions, process automation, and comprehensive engineering services. We don't just supply machinery; we engineer complete project success.
              </p>
            </motion.div>

            {/* Animated Counters */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-l-4 border-[#F47A20] pl-6"
              >
                <div className="text-4xl font-bold text-[#0B1F35] mb-1">25<span className="text-[#F47A20]">+</span></div>
                <div className="text-sm text-gray-500 font-medium">Years of Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-l-4 border-[#F47A20] pl-6"
              >
                <div className="text-4xl font-bold text-[#0B1F35] mb-1">500<span className="text-[#F47A20]">+</span></div>
                <div className="text-sm text-gray-500 font-medium">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border-l-4 border-[#F47A20] pl-6"
              >
                <div className="text-4xl font-bold text-[#0B1F35] mb-1">12<span className="text-[#F47A20]">+</span></div>
                <div className="text-sm text-gray-500 font-medium">Industries Served</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="border-l-4 border-[#F47A20] pl-6"
              >
                <div className="text-4xl font-bold text-[#0B1F35] mb-1">50<span className="text-[#F47A20]">+</span></div>
                <div className="text-sm text-gray-500 font-medium">Global Partners</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/about" className="inline-flex items-center gap-2 text-[#0B1F35] font-semibold border-b-2 border-[#0B1F35] pb-1 hover:text-[#F47A20] hover:border-[#F47A20] transition-colors group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
