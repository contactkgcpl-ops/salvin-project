import React, { createContext, useContext, useState } from 'react';

const LeadContext = createContext();

export const useLeadContext = () => useContext(LeadContext);

export const LeadProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('Get a Free Technical Consultation');

  const openModal = (msg = 'Get a Free Technical Consultation') => {
    setModalMessage(msg);
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <LeadContext.Provider value={{ isModalOpen, openModal, closeModal, modalMessage }}>
      {children}
    </LeadContext.Provider>
  );
};
