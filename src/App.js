// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// layouts
import Sidebar from './layouts/sidebar/sidebar.layout.js';
import Footer from './layouts/footer/footer.layout.js';
// pages
import Home from './pages/home/home.page.js';
import BioPage from './pages/bio/bio.page';
import RatesPage from './pages/rates/rates.page';
import AftercarePage from './pages/after-care/after-care.page.js';
import PastWorkPage from './pages/past-work/past-work.page';
import PoliciesPage from './pages/policies/policies.page.js';
/*
import AppointmentsPage from './pages/appointments/appointments.page';
*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="page-content">
          <Routes>
            <Route path="/bio" element={<BioPage />} />
            <Route path="/rates" element={<RatesPage />} />
            <Route path="/after-care" element={<AftercarePage />} />
            <Route path="/past-work" element={<PastWorkPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            {/*
            <Route path="/appointments" element={<AppointmentsPage />} />
            {/* You can add a default route or 404 page here */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
