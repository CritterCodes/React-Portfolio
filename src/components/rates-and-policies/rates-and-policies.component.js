import React from 'react';
import { Link } from 'react-router-dom';
import './rates-and-policies.component.css';

const RatesAndPoliciesComponent = () => {
    return (
      <div className="rates-and-policies">
        <div className="scroll-container">
          <div className="card-container">
            {/* Rates Card */}
            <div className="info-card">
              <h3>Rates</h3>
              <p>Explore our hourly, half-day, and full-day rates for your next tattoo.</p>
              <Link to="/rates" className="cta-button">View Rates</Link>
            </div>
  
            {/* Policies Card */}
            <div className="info-card">
              <h3>Policies</h3>
              <p>Review our policies for appointments, cancellations, and deposits.</p>
              <Link to="/policies" className="cta-button">Read Policies</Link>
            </div>
  
            {/* Aftercare Card */}
            <div className="info-card">
              <h3>Aftercare</h3>
              <p>Learn how to care for your tattoo and ensure optimal healing.</p>
              <Link to="/after-care" className="cta-button">Aftercare Info</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RatesAndPoliciesComponent;