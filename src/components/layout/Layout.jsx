import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadMagnetModal from '../ui/LeadMagnetModal';
import ChatBot from '../ui/ChatBot';
import { useExitIntent } from '../../hooks/useExitIntent';
import { useLeadContext } from '../../context/LeadContext';

const Layout = () => {
  const { openModal } = useLeadContext();
  
  useExitIntent(() => {
    openModal("Wait! Let's Discuss Your Project.");
  });
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
      <LeadMagnetModal />
    </div>
  );
};

export default Layout;
