import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#0B1F35]/90 z-10"></div>
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F47A20] animate-pulse"></span>
              <span className="text-white text-sm font-medium tracking-wide uppercase">Ready to Upgrade?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Let's Build Your Next <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47A20] to-orange-400">Engineering Project</span> Together
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with Salvin India for innovative design, robust manufacturing, and turnkey solutions that drive your industry forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#F47A20] text-white font-bold rounded-xl hover:bg-white hover:text-[#0B1F35] transition-all duration-300 shadow-xl shadow-[#F47A20]/20 group text-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:+919898727796"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg group"
              >
                <Phone className="w-5 h-5 mr-3 text-white group-hover:text-[#F47A20] transition-colors" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
