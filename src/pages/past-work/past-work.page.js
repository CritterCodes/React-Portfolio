import React from 'react';
import './past-work.page.css';

const Gallery = () => {
    return (
        <div className="instagram-gallery">
            <h2 className="gallery-title">Past Work</h2>
            <iframe
                src="https://www.instagram.com/faamo_/"
                width="100%"
                height="600px"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                title="Instagram Gallery"
            ></iframe>
            <p className="gallery-note">
                Check out more of Austin's work on <a href="https://www.instagram.com/faamo_/" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
        </div>
    );
};

export default Gallery;
