// src/pages/home/home.page.js
import React from 'react';
import { Link } from 'react-router-dom';

// components
// import MeetTheArtist from '../../components/meet-the-artist/meet-the-artist.component';
import Hero from '../../components/hero/hero.component';
import MeetTheArtist from '../../components/meet-the-artist/meet-the-artist.component';
import RatesAndPolicies from '../../components/rates-and-policies/rates-and-policies.component';
import Contact from '../../components/contact/contact.component';

import './home.page.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="intro-section">
                <Hero />
            </div>

            <section className="highlights">
                <MeetTheArtist />
                <RatesAndPolicies />
                    <Contact />
            </section>
        </div>
    );
};

export default HomePage;
