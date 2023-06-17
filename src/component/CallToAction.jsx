import React from 'react';
import '../style/callToAction.css';
// import backgroundImage from '../assests/playa.jpg';

function CallToAction() {
  const handleButtonClick = () => {
    alert('Thank you for booking with us!');
  };

  return (
    // <div className="cta-container" style={{ backgroundImage: `url(${backgroundImage})` }}> por si le queremos agregar una imagen 
    <div>
      <h1 className="cta-heading">Find your perfect trip, designed by insiders who and love their cities!</h1>

      <button className="cta-button" onClick={handleButtonClick}>
        Book now
      </button>
    </div>
  );
}

export default CallToAction;
