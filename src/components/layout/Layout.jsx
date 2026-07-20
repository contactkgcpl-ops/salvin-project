import React, { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadMagnetModal from '../ui/LeadMagnetModal';
import ChatBot from '../ui/ChatBot';
import Breadcrumbs from '../ui/Breadcrumbs';
import { useExitIntent } from '../../hooks/useExitIntent';
import { useLeadContext } from '../../context/LeadContext';

const Layout = () => {
  const { openModal } = useLeadContext();
  
  const handleExit = useCallback(() => {
    openModal("Wait! Let's Discuss Your Project.");
  }, [openModal]);

  useExitIntent(handleExit);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs />
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
