// src/pages/rates/rates.page.js
import React from 'react';
import './rates.page.css';

const RatesPage = () => {
  return (
    <div className="rates-page">
      <h1>Rates & Deposit Information</h1>
      
      <section className="deposit-info">
        <h2>Deposit</h2>
        <p>
          A <strong>$50-$100 non-refundable deposit</strong> is required before booking any appointment. This deposit will be deducted from the final cost of your tattoo.
        </p>
      </section>

      <section className="appointment-rates">
        <h2>Appointment Rates</h2>
        <div className="rate">
          <h3>Full Day Session</h3>
          <p>$1,000</p>
          <p>Perfect for larger, more detailed pieces or multiple tattoos in a single session.</p>
        </div>
        <div className="rate">
          <h3>Half Day Session</h3>
          <p>$600</p>
          <p>Ideal for medium-sized pieces or detailed smaller tattoos.</p>
        </div>
        <div className="rate">
          <h3>Hourly Rate</h3>
          <p>$150 per hour</p>
          <p>Best for smaller tattoos or those with limited time requirements.</p>
        </div>
      </section>
    </div>
  );
};

export default RatesPage;
