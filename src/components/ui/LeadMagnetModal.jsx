import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, TrendingUp, Settings2 } from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';
import { handleFormSubmit } from '../../utils/formSubmit';

const LeadMagnetModal = () => {
  const { isModalOpen, closeModal, modalMessage } = useLeadContext();
  const [formData, setFormData] = useState({
    Name: '',
    Company: '',
    Email: '',
    Phone: '',
    Requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    handleFormSubmit(e, formData, "Lead Magnet Modal");
    closeModal();
    // Reset form
    setFormData({ Name: '', Company: '', Email: '', Phone: '', Requirements: '' });
  };

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Dark Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-[#0B1F35]/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row rounded-2xl z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Value Proposition */}
          <div className="w-full md:w-[45%] bg-[#0B1F35] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/slider-1.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                {modalMessage}
              </h2>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F47A20] shrink-0" />
                  <p className="text-gray-300 text-sm">Expert engineering analysis of your project requirements.</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#F47A20] shrink-0" />
                  <p className="text-gray-300 text-sm">Actionable insights to maximize plant yield and reduce downtime.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Settings2 className="w-6 h-6 text-[#F47A20] shrink-0" />
                  <p className="text-gray-300 text-sm">Custom automation strategies tailored to your industry.</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <p className="text-white text-sm font-medium italic">
                  "Salvin's consultation saved us 30% on our initial turnkey setup costs by identifying automation bottlenecks early."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Form */}
          <div className="w-full md:w-[55%] bg-white p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0B1F35] mb-2">Request a Quote</h3>
            <p className="text-gray-500 text-sm mb-6">Fill out the form below and our engineering experts will get back to you within 24 hours.</p>

            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" name="Name" value={formData.Name} onChange={handleChange} required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47A20]/50 focus:border-[#F47A20] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" name="Company" value={formData.Company} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47A20]/50 focus:border-[#F47A20] transition-all" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" name="Email" value={formData.Email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47A20]/50 focus:border-[#F47A20] transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47A20]/50 focus:border-[#F47A20] transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Requirements / Inquiry</label>
                <textarea rows="3" name="Requirements" value={formData.Requirements} onChange={handleChange} required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47A20]/50 focus:border-[#F47A20] transition-all resize-none" placeholder="Tell us briefly about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#F47A20] hover:bg-[#e06915] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-2 cursor-pointer">
                Submit Request
              </button>
              <p className="text-xs text-center text-gray-400 mt-2">Your information is 100% secure and will never be shared.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadMagnetModal;
