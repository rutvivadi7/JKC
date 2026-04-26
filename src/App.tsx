import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurCompany from './pages/OurCompany';
import Leadership from './pages/Leadership';
import WhatWeDo from './pages/WhatWeDo';
import CivilConstruction from './pages/CivilConstruction';
import Infrastructure from './pages/Infrastructure';
import Residential from './pages/Residential';
import Careers from './pages/Careers';
import ConnectToOurCareers from './pages/ConnectToOurCareers';
import UploadResume from './pages/UploadResume';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import Safety from './pages/Safety';
import People from './pages/People';
import OurFamilyOfCompanies from './pages/OurFamilyOfCompanies';
import Quality from './pages/Quality';
import Sustainability from './pages/Sustainability';
import WirelineConstruction from './pages/WirelineConstruction';
import WirelessConstruction from './pages/WirelessConstruction';
import Engineering from './pages/Engineering';
import Fulfillment from './pages/Fulfillment';
import LocatingAndSUE from './pages/LocatingAndSUE';
import ProjectManagement from './pages/ProjectManagement';
import MaintenanceAndAMC from './pages/MaintenanceAndAMC';
import TalentNetwork from './pages/TalentNetwork';
import JobDetails from './pages/JobDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/civil-construction" element={<CivilConstruction />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/connect-to-our-careers" element={<ConnectToOurCareers />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/people" element={<People />} />
        <Route path="/our-family-of-companies" element={<OurFamilyOfCompanies />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/wireline-construction" element={<WirelineConstruction />} />
        <Route path="/wireless-construction" element={<WirelessConstruction />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/fulfillment" element={<Fulfillment />} />
        <Route path="/locating-and-sue" element={<LocatingAndSUE />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/maintenance-and-amc" element={<MaintenanceAndAMC />} />
        <Route path="/talent-network" element={<TalentNetwork />} />
        <Route path="/job-details/:jobId" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;