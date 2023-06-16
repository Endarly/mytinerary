import React from 'react';
import '../style/callToAction.css';

function CallToAction() {
    const handleButtonClick = () => {
        alert('¡Thank you for booking with us!');
    };

    return (
        <div>
          <h1 className="cta-heading">Welcome to our Travel Agency</h1>
          <p>Explore the most fascinating destinations in the world!</p>
    
          <button className="cta-button" onClick={handleButtonClick}>
            Book now
          </button>
        </div>
      );
    }

export default CallToAction;
