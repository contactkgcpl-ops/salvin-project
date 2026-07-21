import TurnkeyProjects from './pages/TurnkeyProjects';
import RedChilliDetailPage from './pages/TurnkeyProject/components/RedChilliDetailPage';
import PizzaSauceProcessingDetailPage from './pages/TurnkeyProject/components/PizzaSauceProcessingDetailPage';
import TomatoKetchupManufacturingDetailPage from './pages/TurnkeyProject/components/TomatoKetchupManufacturingDetailPage';
import CoffeeProcessingDetailPage from './pages/TurnkeyProject/components/CoffeeProcessingDetailPage';
import GreenTeaProcessingDetailPage from './pages/TurnkeyProject/components/GreenTeaProcessingDetailPage';
import PotatoPowderDehydrationDetailPage from './pages/TurnkeyProject/components/PotatoPowderDehydrationDetailPage';
import IndustrialFlourMillingDetailPage from './pages/TurnkeyProject/components/IndustrialFlourMillingDetailPage';
import PeanutOilMillDetailPage from './pages/TurnkeyProject/components/PeanutOilMillDetailPage';
import CorianderPowderDetailPage from './pages/TurnkeyProject/components/CorianderPowderDetailPage';
import WheatFlourProcessingDetailPage from './pages/TurnkeyProject/components/WheatFlourProcessingDetailPage';
import EdibleOilProcessingDetailPage from './pages/TurnkeyProject/components/EdibleOilProcessingDetailPage';
import PastaNoodlesDetailPage from './pages/TurnkeyProject/components/PastaNoodlesDetailPage';
import PeanutButterDetailPage from './pages/TurnkeyProject/components/PeanutButterDetailPage';
import JackfruitDetailPage from './pages/TurnkeyProject/components/JackfruitDetailPage';
import GingerGarlicPasteDetailPage from './pages/TurnkeyProject/components/GingerGarlicPasteDetailPage';
import BlackPepperDetailPage from './pages/TurnkeyProject/components/BlackPepperDetailPage';
import SeedCleaningSortingDetailPage from './pages/TurnkeyProject/components/SeedCleaningSortingDetailPage';
import CocoaPowderProcessingDetailPage from './pages/TurnkeyProject/components/CocoaPowderProcessingDetailPage';
import LiquidGlucoseDetailPage from './pages/TurnkeyProject/components/LiquidGlucoseDetailPage';
import ProteinBarManufacturingDetailPage from './pages/TurnkeyProject/components/ProteinBarManufacturingDetailPage';
import MayonnaiseProcessingDetailPage from './pages/TurnkeyProject/components/MayonnaiseProcessingDetailPage';
import InstantMixFrozenFoodDetailPage from './pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage';
import InstantNoodlesDetailPage from './pages/TurnkeyProject/components/InstantNoodlesDetailPage';
import TurnkeyDetailPage from './pages/TurnkeyProject/components/TurnkeyDetailPage';

// 5 New Projects
import ChikkiPluckingDetailPage from './pages/TurnkeyProject/components/ChikkiPluckingDetailPage';
import DryFruitChikkiDetailPage from './pages/TurnkeyProject/components/DryFruitChikkiDetailPage';
import MamraPauvaDetailPage from './pages/TurnkeyProject/components/MamraPauvaDetailPage';
import TomatoPureeDetailPage from './pages/TurnkeyProject/components/TomatoPureeDetailPage';
import TomatoPasteDetailPage from './pages/TurnkeyProject/components/TomatoPasteDetailPage';

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
import Careers from './pages/Careers';
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
          <Route path="careers" element={<Careers />} />
          <Route path="turnkey-projects" element={<TurnkeyProjects />} />
          <Route path="turnkey-project/red-chilli-processing-plant" element={<RedChilliDetailPage />} />
          <Route path="turnkey-project/pizza-sauce-processing-plant" element={<PizzaSauceProcessingDetailPage />} />
          <Route path="turnkey-project/tomato-ketchup-manufacturing-plant" element={<TomatoKetchupManufacturingDetailPage />} />
          <Route path="turnkey-project/coffee-processing-plant" element={<CoffeeProcessingDetailPage />} />
          <Route path="turnkey-project/green-tea-processing-plant" element={<GreenTeaProcessingDetailPage />} />
          <Route path="turnkey-project/potato-powder-dehydration-plant" element={<PotatoPowderDehydrationDetailPage />} />
          <Route path="turnkey-project/industrial-flour-milling-plant" element={<IndustrialFlourMillingDetailPage />} />
          <Route path="turnkey-project/peanut-oil-mill-plant" element={<PeanutOilMillDetailPage />} />
          <Route path="turnkey-project/edible-oil-processing-plant" element={<EdibleOilProcessingDetailPage />} />
          <Route path="turnkey-project/wheat-flour-processing-plant" element={<WheatFlourProcessingDetailPage />} />
          <Route path="turnkey-project/coriander-powder-plant" element={<CorianderPowderDetailPage />} />
          <Route path="turnkey-project/pasta-noodles-production-plant" element={<PastaNoodlesDetailPage />} />
          <Route path="turnkey-project/peanut-butter-processing-plant" element={<PeanutButterDetailPage />} />
          <Route path="turnkey-project/jackfruit-canning-retort-line" element={<JackfruitDetailPage />} />
          <Route path="turnkey-project/ginger-garlic-paste-plant" element={<GingerGarlicPasteDetailPage />} />
          <Route path="turnkey-project/black-pepper-powder-line-plant" element={<BlackPepperDetailPage />} />
          <Route path="turnkey-project/seed-cleaning-sorting-line-plant" element={<SeedCleaningSortingDetailPage />} />
          <Route path="turnkey-project/cocoa-powder-processing-system-plant" element={<CocoaPowderProcessingDetailPage />} />
          <Route path="turnkey-project/liquid-glucose-manufacturing-plant" element={<LiquidGlucoseDetailPage />} />
          <Route path="turnkey-project/protein-bar-manufacturing-plant" element={<ProteinBarManufacturingDetailPage />} />
          <Route path="turnkey-project/mayonnaise-processing-plant" element={<MayonnaiseProcessingDetailPage />} />
          <Route path="turnkey-project/instant-mix-frozen-food-processing-plant" element={<InstantMixFrozenFoodDetailPage />} />
          <Route path="turnkey-project/instant-noodles-processing-plant" element={<InstantNoodlesDetailPage />} />
          
          <Route path="turnkey-project/chikki-plucking-plant" element={<ChikkiPluckingDetailPage />} />
          <Route path="turnkey-project/dry-fruit-chikki-plant" element={<DryFruitChikkiDetailPage />} />
          <Route path="turnkey-project/mamra-pauva-plant" element={<MamraPauvaDetailPage />} />
          <Route path="turnkey-project/tomato-puree-plant" element={<TomatoPureeDetailPage />} />
          <Route path="turnkey-project/tomato-paste-plant" element={<TomatoPasteDetailPage />} />

          <Route path="turnkey-project/:projectSlug" element={<TurnkeyDetailPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </LeadProvider>
  );
}

export default App;
