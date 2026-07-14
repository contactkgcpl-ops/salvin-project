import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Image */}
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-2xl relative z-10">
                {/* Image Placeholder - User will replace this with their actual image file */}
                <img 
                  src="/director.png" 
                  alt="Keval Gandhi - Director" 
                  className="w-full h-auto object-cover aspect-[4/3] object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-4 border-[#F47A20] rounded-3xl -z-0"></div>
              
              {/* Decorative Quote */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#0B1F35] rounded-full flex items-center justify-center text-[#F47A20] z-20 shadow-xl">
                <Quote className="w-8 h-8" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm">Leadership</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F35] mb-8 leading-tight">
                Driving Innovation & <br/> Engineering Excellence
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  "At Salvin India, we believe that engineering is not just about building machinery—it's about creating sustainable, efficient, and forward-thinking solutions that empower industries."
                </p>
                <p>
                  Our commitment to precision and quality has made us a trusted partner for manufacturing companies worldwide. We continuously invest in advanced technology and our talented team to ensure we deliver unparalleled value in every project we undertake.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B1F35]">Keval Gandhi</h3>
                <p className="text-[#F47A20] font-medium uppercase tracking-wider text-sm mt-1">Director, Salvin India</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
