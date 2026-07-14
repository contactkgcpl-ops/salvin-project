import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Mega Food Processing Plant",
      industry: "Food & Beverage",
      location: "Gujarat, India",
      overview: "Designed and commissioned a fully automated 500TPD food processing facility with zero liquid discharge system.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "API Pharmaceutical Facility",
      industry: "Pharmaceutical",
      location: "Maharashtra, India",
      overview: "End-to-end turnkey solution for a high-containment API manufacturing unit compliant with US-FDA standards.",
      image: "https://images.unsplash.com/photo-1587293852726-59cb2a79841f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Advanced Chemical Refinery",
      industry: "Chemical",
      location: "Dubai, UAE",
      overview: "Capacity expansion and automation upgrade for a specialty chemicals plant improving efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1584344075199-a3b02ce3f6c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F47A20] font-semibold tracking-wider uppercase mb-3 text-sm"
          >
            Case Studies
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0B1F35] leading-tight mb-6"
          >
            Transformative Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            A showcase of our engineering capabilities and the tangible impact we deliver to our global clients.
          </motion.p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative bg-[#0B1F35] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[400px]"
            >
              {/* Image Section */}
              <div className="w-full md:w-[55%] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-[45%] p-10 md:p-14 flex flex-col justify-center relative z-20 bg-gradient-to-l from-[#051121] to-[#0B1F35]">
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                    {project.industry}
                  </span>
                  <span className="px-4 py-1.5 bg-[#F47A20]/20 text-[#F47A20] text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-[#F47A20] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {project.overview}
                </p>

                <div className="mt-auto">
                  <Link to="#" className="inline-flex items-center gap-3 text-white font-semibold group/btn hover:text-[#F47A20] transition-colors">
                    <span className="border-b-2 border-transparent group-hover/btn:border-[#F47A20] pb-1 transition-all">View Complete Project</span>
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-[#F47A20] group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-2">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-[#0B1F35] text-white font-semibold rounded-lg hover:bg-[#F47A20] transition-all duration-300 shadow-xl shadow-[#0B1F35]/20 group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
