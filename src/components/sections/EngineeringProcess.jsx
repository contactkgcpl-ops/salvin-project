import React from 'react';
import { motion } from 'framer-motion';

const EngineeringProcess = () => {
  const steps = [
    { num: "01", title: "Consultation", desc: "Understanding requirements, constraints, and project goals." },
    { num: "02", title: "Research & Plan", desc: "Feasibility studies, site analysis, and conceptual layout." },
    { num: "03", title: "Detailed Design", desc: "3D modeling, equipment sizing, and precise engineering." },
    { num: "04", title: "Manufacturing", desc: "In-house fabrication with stringent quality control." },
    { num: "05", title: "Installation", desc: "On-site erection, piping, wiring, and integration." },
    { num: "06", title: "Testing", desc: "Dry/wet runs, automation checks, and optimization." },
    { num: "07", title: "Support", desc: "Training, documentation, and lifecycle maintenance." }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm"
          >
            How We Execute
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight"
          >
            Our Turnkey Project Lifecycle
          </motion.h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gray-200">
            <motion.div 
              className="h-full bg-[#F47A20]"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center w-full lg:flex-1 relative group"
              >
                {/* Number Circle */}
                <div className="w-[80px] h-[80px] shrink-0 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-xl font-bold text-gray-400 mb-6 group-hover:border-[#F47A20] group-hover:text-[#F47A20] group-hover:shadow-[0_0_20px_rgba(244,122,32,0.2)] transition-all duration-300 relative z-10 lg:mx-auto mr-6">
                  {step.num}
                  {/* Active dot */}
                  <div className="absolute inset-2 rounded-full bg-[#F47A20]/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>

                {/* Vertical Line for Mobile */}
                <div className="lg:hidden absolute top-[80px] left-[39px] bottom-[-2rem] w-[2px] bg-gray-200 z-0 last:hidden"></div>

                {/* Content */}
                <div className="pt-4 lg:pt-0 pb-12 lg:pb-0">
                  <h3 className="text-xl font-bold text-[#0B1F35] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed hidden lg:block">
                    {step.desc}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed lg:hidden max-w-[250px]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringProcess;
