// src/components/meet-the-artist/meet-the-artist.component.js

import React from 'react';
import { Link } from 'react-router-dom';
import './meet-the-artist.component.css';

const MeetTheArtist = () => {
    return (
        <div className="meet-the-artist">
            <img src="/austinHeadshot.jpg" alt="Austin Anderson" className="artist-photo" />
            <div className="artist-info">
                <h2 className="artist-name">Austin Anderson</h2>
                <p className="artist-bio">
                    Austin is a mixed media artist from Alma, Arkansas. Known across the River Valley for his pen and ink artwork, graffiti, and murals, Austin began his tattooing journey at Hanging City Body Modifications. Now, he brings his unique style to Nightshade Tattoo and Oddities.
                </p>
                <p className="call-to-action">Read more about Austin.</p>
                <div className="button-wrapper">
                    <Link to="/bio" className="bio-button">Full Bio</Link>
                </div>
            </div>
        </div>
    );
};

export default MeetTheArtist;
