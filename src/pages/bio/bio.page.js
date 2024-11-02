// src/pages/bio/bio.page.js
import React from 'react';
import './bio.page.css';

const BioPage = () => {
  return (
    <div className="bio-page">
      <h1>Meet Austin Anderson</h1>
      
      <section className="bio-section">
        <div className="bio-photo">
          <img src="/austinHeadshot.jpg" alt="Austin Anderson" />
        </div>
        <div className="bio-info">
          <p>
            Austin Anderson is a skilled mixed media artist from Alma, Arkansas, celebrated across the River Valley for his captivating artwork that spans pen and ink, graffiti, and large-scale murals. With a background rooted in diverse art forms, Austin transitioned into tattooing with a fresh perspective that sets his work apart.
          </p>
          <p>
            Austin began his tattoo journey at Hanging City Body Modifications, where he honed his technical skills and developed a unique style that blends boldness with fine detail. He now works at Nightshade Tattoo and Oddities in Fort Smith, Arkansas, where he continues to build on his craft and connect deeply with each client.
          </p>
          <p>
            Known for his ability to work across a variety of tattoo styles, Austin approaches each piece as an opportunity for creative expression and collaboration. He takes pride in crafting designs that embody his clients' stories, whether through delicate line work, intricate black-and-gray pieces, or vibrant color work.
          </p>
          <p>
            Inspired by the stories and personalities of his clients, Austin sees each tattoo as a living piece of art that reflects the wearer’s individuality. From small, symbolic pieces to larger, custom designs, Austin is dedicated to transforming visions into meaningful art, blending his love of tattooing with his fine art background to create unforgettable works of body art.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BioPage;
