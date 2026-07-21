import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Years of Experience', value: '12+' },
  { label: 'Global Clients', value: '45+' },
  { label: 'Expert Engineers', value: '30+' }
];

const ProjectStatistics = () => {
  return (
    <section className="py-20 bg-[#0B1F35] relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F47A20] blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[#F47A20] font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStatistics;
