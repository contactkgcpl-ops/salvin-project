import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyOverview = () => {
  return (
    <section id="company" className="pt-20 pb-32 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Single Main Image */}
          <div className="w-full lg:w-1/2 relative pb-8 pr-4 sm:pr-8 lg:pr-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 shadow-2xl rounded-xl overflow-hidden"
            >
              <img 
                src="/images/food-plant.webp" 
                alt="Salvin Industrial Plant Machinery" 
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
                We Setup Complete Manufacturing Plants For You
              </h2>
              
              <div className="text-gray-600 text-base md:text-lg space-y-5 mb-10 leading-relaxed">
                <p>
                  Salvin Projects helps you set up complete factories and manufacturing plants. Whether you want to start a new business in Food, Spices, Pharma, Cosmetics, Chemicals, or Beverages, we provide the complete setup from start to finish.
                </p>
                <p>
                  Instead of just selling you machines, we take full responsibility for your entire project. Our team handles the factory design, provides all the necessary machinery, does the complete installation, and makes sure your plant is running perfectly.
                </p>
                <p>
                  With many years of real experience, we know exactly how to set up a successful factory. We make sure your plant is built safely, delivered on time, and is ready for production from day one.
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
