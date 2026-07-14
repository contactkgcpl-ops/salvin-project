import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Engineering Expertise",
      desc: "Our team of multi-disciplinary engineers brings decades of specialized experience to solve complex industrial challenges.",
      highlight: true
    },
    {
      title: "Customized Solutions",
      desc: "We don't believe in one-size-fits-all. Every plant, process, and machine is tailored to your specific operational needs.",
      highlight: false
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing and international quality standards ensure our equipment operates flawlessly under demanding conditions.",
      highlight: false
    },
    {
      title: "On-Time Delivery",
      desc: "Advanced project management techniques guarantee that your plant goes live exactly when promised, minimizing downtime.",
      highlight: true
    },
    {
      title: "Modern Manufacturing",
      desc: "Our state-of-the-art fabrication facilities utilize precision CNC machinery for unmatched build quality.",
      highlight: false
    },
    {
      title: "Long-Term Support",
      desc: "Beyond commissioning, we provide continuous operational support, training, and rapid-response maintenance.",
      highlight: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm"
          >
            The Salvin Advantage
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0B1F35] leading-tight mb-6"
          >
            Why Industry Leaders Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We combine deep engineering knowledge with a relentless commitment to innovation, delivering solutions that drive efficiency, profitability, and growth for our clients.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full"
            >
              <div className={`h-full p-10 rounded-2xl border transition-all duration-300 transform group-hover:-translate-y-2 ${
                reason.highlight 
                  ? 'bg-[#0B1F35] border-[#0B1F35] text-white shadow-2xl shadow-[#0B1F35]/20' 
                  : 'bg-white border-gray-100 text-[#0B1F35] hover:shadow-xl hover:border-gray-200'
              }`}>
                <div className={`text-6xl font-serif font-bold mb-6 transition-colors duration-300 ${reason.highlight ? 'text-white/20' : 'text-gray-100 group-hover:text-[#F47A20]/20'}`}>
                  0{idx + 1}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${reason.highlight ? 'text-white' : 'text-[#0B1F35]'}`}>
                  {reason.title}
                </h3>
                <p className={`leading-relaxed text-sm ${reason.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {reason.desc}
                </p>
                
                {/* Subtle Decorative Line */}
                <div className={`w-12 h-1 mt-8 rounded-full transition-all duration-300 ${reason.highlight ? 'bg-[#F47A20]' : 'bg-gray-200 group-hover:bg-[#F47A20] group-hover:w-16'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
