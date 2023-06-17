import React from 'react';
import underConstructionImage from '../assests/jackhanmer-construction-worker.gif';
import '../style/cities.css';

function Cities() {
  return (
    <div className='containerCities'>
      <h3>CITIES IS UNDER CONSTRUCTION</h3>
      <img
        src={underConstructionImage}
        alt="Under Construction"
        style={{ width: '40%', height: '90%' }}
      />
    </div>
  );
}

export default Cities;

