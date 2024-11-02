// src/pages/aftercare/aftercare.page.js
import React from 'react';
import './after-care.page.css';

const AftercarePage = () => {
  return (
    <div className="aftercare-page">
      <h1>Aftercare Instructions</h1>
      <section className="aftercare-section">
        <h2>Immediate Aftercare</h2>
        <p>
          Once your tattoo is complete, your artist will clean and bandage it. Keep the bandage on for at least 2-3 hours or as instructed by your artist. This initial covering helps protect your tattoo from bacteria and reduces the risk of infection.
        </p>
      </section>
      
      <section className="aftercare-section">
        <h2>Cleaning Your Tattoo</h2>
        <p>
          After removing the bandage, wash your tattoo gently with lukewarm water and a mild, fragrance-free soap. Avoid scrubbing or using a washcloth—your hands will be the best tool here. Pat dry with a clean paper towel and let the tattoo air dry for a few minutes.
        </p>
      </section>

      <section className="aftercare-section">
        <h2>Moisturizing</h2>
        <p>
          Once your tattoo is dry, apply a thin layer of fragrance-free, alcohol-free moisturizer. Do this 2-3 times a day or as recommended by your artist. Avoid over-moisturizing, as this can clog pores and affect the healing process.
        </p>
      </section>

      <section className="aftercare-section">
        <h2>What to Avoid</h2>
        <ul>
          <li><strong>Do not</strong> expose your tattoo to direct sunlight. UV rays can fade and damage your tattoo, especially during the healing process.</li>
          <li><strong>Do not</strong> soak your tattoo in water (baths, pools, hot tubs) for at least 2-3 weeks.</li>
          <li><strong>Do not</strong> pick, scratch, or peel at any scabs or flakes that form. Let them fall off naturally.</li>
          <li><strong>Avoid</strong> wearing tight clothing that may rub against the tattoo.</li>
        </ul>
      </section>

      <section className="aftercare-section">
        <h2>Healing Process</h2>
        <p>
          It’s normal for your tattoo to go through stages of healing. You may experience redness, itching, or mild peeling in the first week. If you experience any signs of infection (increased redness, swelling, pus), contact your tattoo artist or a healthcare provider.
        </p>
      </section>

      <section className="aftercare-section">
        <h2>Long-Term Care</h2>
        <p>
          To keep your tattoo looking vibrant, always use sunscreen (SPF 30 or higher) once your tattoo is fully healed. Regular moisturizing will also help maintain the colors and details over time.
        </p>
      </section>
    </div>
  );
};

export default AftercarePage;
