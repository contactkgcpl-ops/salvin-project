import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="pt-16 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image with Frame */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-4/12 relative mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 group"
            >
              {/* Offset Orange Frame */}
              <div className="absolute top-8 left-8 right-[-32px] bottom-[-32px] border-[3px] border-[#F47A20] rounded-2xl -z-10 rounded-br-[60px] transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              <img 
                src="/director.webp" 
                alt="Er. Keval Gandhi - Director" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover relative z-10 bg-gray-100 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Quote Badge */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#0B1F35] rounded-full flex items-center justify-center shadow-xl z-20">
                <Quote className="w-7 h-7 text-[#F47A20] fill-[#F47A20] rotate-180" />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white rounded-xl shadow-2xl px-6 py-4 flex items-center gap-4 z-20 border border-gray-50">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-bold text-[#0B1F35] text-lg tracking-wide">Er. Keval Gandhi</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-8/12 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-[#F47A20] font-bold tracking-widest uppercase mb-4 text-xs">Leadership</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight mb-8">
                Transforming Ideas into <br/> World-Class Turnkey Projects
              </h2>
              
              <div className="space-y-6 text-gray-600 text-[17px] leading-relaxed mb-10 relative">
                <p>
                  "At Salvin India, we believe that engineering is not just about building machinery—it's about creating sustainable, efficient, and forward-thinking solutions that empower industries."
                </p>
                <p>
                  "Our commitment to precision and quality has made us a trusted partner for manufacturing companies worldwide. We continuously invest in advanced technology and our talented team to ensure we deliver unparalleled value in every turnkey project we undertake."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
