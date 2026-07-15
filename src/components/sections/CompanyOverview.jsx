import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyOverview = () => {
  return (
    <section id="company" className="pt-20 pb-32 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Classic Professional Overlapping Images */}
          <div className="w-full lg:w-1/2 relative pb-16 pr-8 sm:pr-12 lg:pr-16">
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 shadow-2xl rounded-xl overflow-hidden"
            >
              <img 
                src="/about-plant.png" 
                alt="Salvin Industrial Plant" 
                className="w-full h-auto block hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 right-0 md:-right-6 z-20 w-[70%] shadow-2xl rounded-xl border-[10px] border-white overflow-hidden bg-white"
            >
              <img 
                src="/about-engineers.png" 
                alt="Salvin Engineers" 
                className="w-full h-auto block hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

          </div>

          {/* Right: Simple, Grounded Company Profile */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#F47A20] font-bold text-sm tracking-widest uppercase mb-4">
                About Salvin Projects
              </h4>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] mb-6 leading-tight">
                Your Trusted Engineering Partner for Turnkey Plant Setup
              </h2>
              
              <div className="text-gray-600 text-base md:text-lg space-y-5 mb-10 leading-relaxed">
                <p>
                  Salvin Projects is a specialized engineering company focused on delivering complete turnkey plant setups, process engineering, and industrial automation. We help manufacturers in pharmaceuticals, chemicals, food & beverage, and cosmetics build robust and highly efficient production facilities.
                </p>
                <p>
                  Instead of just supplying machinery, we take complete ownership of your project. Our team handles everything from the initial facility design and custom equipment fabrication to final installation, piping, and FDA/FSSAI compliance trials.
                </p>
                <p>
                  With decades of practical, on-ground experience, our engineers understand the exact challenges of scaling up production. We ensure your plant is built to international standards, delivered on time, and runs seamlessly from day one.
                </p>
              </div>

              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-white bg-[#0B1F35] px-8 py-4 rounded font-bold hover:bg-[#F47A20] transition-colors shadow-md hover:shadow-lg"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CompanyOverview;
