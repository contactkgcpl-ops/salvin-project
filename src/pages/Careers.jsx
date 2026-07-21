import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { handleFormSubmit } from '../utils/formSubmit';

const Careers = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Role: '',
    Message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e, formData, "Careers Application Form");
    setFormData({ Name: '', Email: '', Phone: '', Role: '', Message: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-[#F3F4F6] font-sans pt-32 pb-20">
      <SEO 
        title="Careers at Salvin Projects | Join Our Engineering Team"
        description="Looking for a career in industrial engineering, manufacturing, or project management? Join Salvin Projects and help build world-class turnkey plants."
        keywords="careers at salvin projects, engineering jobs ahmedabad, manufacturing jobs gujarat, industrial automation careers"
        url="https://kmgprojects.in/careers"
      />
      
      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F35] mb-6">Build Your Career With Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are always looking for passionate engineers, designers, and professionals to join our growing team. Shape the future of industrial manufacturing with Salvin Projects.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
        
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0B1F35] mb-6">Why Join Salvin Projects?</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                  <Briefcase className="w-6 h-6 text-[#F47A20]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B1F35] mb-2">Challenging Projects</h4>
                  <p className="text-gray-600">Work on massive turnkey setups for top global brands in food, pharma, and chemical sectors.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                  <svg className="w-6 h-6 text-[#F47A20]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B1F35] mb-2">Innovation Driven</h4>
                  <p className="text-gray-600">Access the latest in 3D modeling, automation, and industrial robotics technologies.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                  <svg className="w-6 h-6 text-[#F47A20]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B1F35] mb-2">Collaborative Culture</h4>
                  <p className="text-gray-600">Be part of a supportive team where your ideas are valued and professional growth is encouraged.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Application Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#0B1F35] mb-6">Submit Your Application</h3>
          
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="font-medium text-sm">Application sent successfully! We will review your profile and contact you soon.</p>
            </motion.div>
          )}

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
              <input type="text" name="Name" value={formData.Name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all" placeholder="John Doe" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input type="email" name="Email" value={formData.Email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all" placeholder="john@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all" placeholder="+91 9876543210" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Desired Role *</label>
              <select name="Role" value={formData.Role} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all bg-white">
                <option value="">Select a role...</option>
                <option value="Mechanical Engineer">Mechanical Engineer</option>
                <option value="Process Engineer">Process Engineer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Draftsman / 3D Modeler">Draftsman / 3D Modeler</option>
                <option value="Sales / Marketing">Sales & Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Cover Letter / Message (Include Link to Resume/CV) *</label>
              <textarea name="Message" value={formData.Message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:border-transparent transition-all resize-none" placeholder="Provide a brief cover letter and paste a link to your CV (Google Drive, LinkedIn, etc.)"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#0B1F35] hover:bg-[#112F50] text-white font-bold py-4 rounded-lg transition-colors shadow-md">
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Careers;
