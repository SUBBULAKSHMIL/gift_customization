import React, { useState } from 'react';
import './sitesettings.css';

function Sitesettings() {
  const [aboutUsText, setAboutUsText] = useState(
    ' \n  About Us\n \n  Welcome to Golden Wrap, your go-to destination for personalized and custom gifts! At \n  Golden Wrap, we believe that every gift should be as unique as the person receiving it.'
  );
  const [contactUsText, setContactUsText] = useState(
    '\n  Contact Us\n\n  We\'d Love to Hear from You!...\n  At Golden Wrap, we value communication and are here to assist you in any way possible. \n  Whether you have questions about our products, need assistance with customization, or want \n  to explore partnership opportunities, we\'re just a message away.'
  );

  const handleSave = (section) => {
    // Perform save operation (you can send the data to a server, save to local storage, etc.)
    console.log(`Save operation performed for ${section}`);
  };

  return (
    <div className='site-settings-entire'>
      <div className='site-settings-contents'>
        <br />
        <div className='sitesetting-aboutus'>
          <h2>About Us</h2>
          <br />
          <textarea
            value={aboutUsText}
            onChange={(e) => setAboutUsText(e.target.value)}
          />
          <br />
          <button
            className='sitesetting-btn2'
            onClick={() => handleSave('about')}
          >
            Save Changes
          </button>
        </div>
        <br />
        <div className='sitesetting-contactus'>
          <h2>Contact Us</h2>
          <br />
          <textarea
            value={contactUsText}
            onChange={(e) => setContactUsText(e.target.value)}
          />
          <br />
          <button
            className='sitesetting-btn2'
            onClick={() => handleSave('contact')}
          >
            Save Changes
          </button>
        </div>
        <br />
        {/* Add additional sections as needed */}
      </div>
    </div>
  );
}

export default Sitesettings;