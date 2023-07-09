import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import '../style/callToAction.css';

function CallToAction() {
  const handleButtonClick = () => {
    alert('Thank you for booking with us!');
  };

  return (
    <div className="cta-container">
    <div>
      <h1 className="cta-heading">Find your perfect trip, designed by insiders who and love their cities!</h1>
      <button className="cta-button" onClick={handleButtonClick}>
      <p className='CallToActionButton'>Click and find it</p><FontAwesomeIcon icon={faMapLocationDot} bounce/>
      </button>
    </div>
    </div>
  );
}

export default CallToAction;
