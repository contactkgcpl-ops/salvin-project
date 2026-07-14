import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      items: ['Turnkey Plant Setup', 'Process Engineering & Consulting', 'Industrial Automation Projects', 'Plant Upgrades & Modernization', 'Operations & Maintenance (O&M)']
    },
    { 
      name: 'Industries', 
      hasDropdown: true,
      items: ['Food & Spices', 'Pharmaceutical', 'Chemical & API', 'Beverage', 'Cosmetics', 'Export Industries']
    },
    { name: 'Contact Us', path: '#contact' }
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img 
            src="/logo.png" 
            alt="Salvin Industries" 
            className="h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <div 
              key={idx} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              {link.hasDropdown ? (
                <Link to={link.path || "#"} className="flex items-center gap-1 font-medium text-base text-gray-700 hover:text-[#0B1F35] transition-colors">
                  {link.name}
                  <ChevronDown className="w-5 h-5" />
                </Link>
              ) : (
                <Link 
                  to={link.path} 
                  className="font-medium text-base text-gray-700 hover:text-[#0B1F35] transition-colors"
                >
                  {link.name}
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[400px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                    >
                      <div className="p-6 grid grid-cols-2 gap-x-4 gap-y-3">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i} 
                            to="#" 
                            className="text-base text-gray-600 hover:text-[#F47A20] font-medium transition-colors py-2 px-3 hover:bg-orange-50 rounded-lg flex items-center group/item"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#F47A20]" />
                            {item}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-4 border-t border-gray-100">
                        <Link to={link.path || "#"} className="text-base font-semibold text-[#0B1F35] flex items-center justify-between hover:text-[#F47A20] transition-colors">
                          View all {link.name.toLowerCase()}
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            to="#contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold transition-all rounded-full bg-[#0B1F35] text-white hover:bg-[#F47A20]"
          >
            Get Free Consultation
          </Link>
          
          <button 
            className="lg:hidden p-2 rounded-lg z-50 text-[#0B1F35]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24 overflow-y-auto"
          >
            <div className="container mx-auto px-6 flex flex-col gap-6 pb-12">
              {navLinks.map((link, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  {link.hasDropdown ? (
                    <div>
                      <div className="font-bold text-lg text-[#0B1F35] mb-4">{link.name}</div>
                      <div className="flex flex-col gap-3 pl-4">
                        {link.items.map((item, i) => (
                          <Link key={i} to="#" className="text-gray-600 font-medium">
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path} className="font-bold text-lg text-[#0B1F35]">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="#contact" className="inline-flex w-full items-center justify-center px-6 py-4 bg-[#F47A20] text-white text-base font-semibold rounded-xl">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
