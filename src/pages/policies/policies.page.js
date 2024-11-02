// src/pages/PoliciesPage/PoliciesPage.js

import React from 'react';
import './policies.page.css';

const PoliciesPage = () => {
    return (
        <div className="policies-page">
            <h1>Policies</h1>

            <section className="policy-section">
                <h2>Deposit Policy</h2>
                <p>
                    A non-refundable deposit of $50-$100 is required to book your appointment. The deposit will be deducted from the total tattoo cost on the day of your appointment. Please note that the deposit is forfeited if you cancel less than 48 hours before your appointment.
                </p>
            </section>

            <section className="policy-section">
                <h2>Appointment Policy</h2>
                <p>
                    Full-day appointments are priced at $1000, and half-day appointments are $600. Austin offers limited slots for these sessions, so early booking is recommended. If you need to reschedule, please notify us at least 48 hours in advance.
                </p>
            </section>

            <section className="policy-section">
                <h2>Tattooing Policy</h2>
                <p>
                    Tattoos are priced based on size, detail, and time required. The hourly rate is $150. Austin maintains a safe and sanitary environment; please arrive at your appointment in good health and avoid alcohol or blood-thinning substances at least 24 hours beforehand.
                </p>
            </section>

        </div>
    );
};

export default PoliciesPage;
