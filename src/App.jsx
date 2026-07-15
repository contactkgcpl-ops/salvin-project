import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import TurnkeyPlantSetup from './pages/services/TurnkeyPlantSetup';
import ProcessEngineering from './pages/services/ProcessEngineering';
import IndustrialAutomation from './pages/services/IndustrialAutomation';
import PlantUpgrades from './pages/services/PlantUpgrades';
import OperationsMaintenance from './pages/services/OperationsMaintenance';
import FoodAndSpices from './pages/industries/FoodAndSpices';
import EngineeringExpertise from './pages/industries/EngineeringExpertise';
import Pharmaceutical from './pages/industries/Pharmaceutical';
import ChemicalAndAPI from './pages/industries/ChemicalAndAPI';
import Beverage from './pages/industries/Beverage';
import Cosmetics from './pages/industries/Cosmetics';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { LeadProvider } from './context/LeadContext';
import './index.css';

function App() {
  return (
    <LeadProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/turnkey-plant-setup" element={<TurnkeyPlantSetup />} />
          <Route path="services/process-engineering" element={<ProcessEngineering />} />
          <Route path="services/industrial-automation" element={<IndustrialAutomation />} />
          <Route path="services/plant-upgrades" element={<PlantUpgrades />} />
          <Route path="services/operations-maintenance" element={<OperationsMaintenance />} />
          <Route path="industries/food-and-spices" element={<FoodAndSpices />} />
          <Route path="industries/engineering-expertise" element={<EngineeringExpertise />} />
          <Route path="industries/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="industries/chemical-and-api" element={<ChemicalAndAPI />} />
          <Route path="industries/beverage" element={<Beverage />} />
          <Route path="industries/cosmetics" element={<Cosmetics />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LeadProvider>
  );
}

export default App;
