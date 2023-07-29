import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/cities.css';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import ItinerariesModalContent from './ItinerariesModalContent';

function CityDetails() {
  const { id } = useParams();
  const [city, setCity] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function getCity(id) {
    try {
      const response = await axios.get(`https://endarly-api-cities-crud.onrender.com/api/cities/${id}`);
      setCity(response.data.response);
      // console.log(response.data.response);
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  }

  useEffect(() => {
    getCity(id);
  }, [id]);

  return (
    <div className='containerCities'>
      {city ? (
        <>
          <img className='imageDetails' src={city.image} alt={city.name} />
          <div className='cityDetails'>
            <div className='name-avatar-wrapper'>
              <h3>{city.name}</h3>
              <img src={city.avatarCountry} alt={city.country} className='avatar' />
            </div>
            <p className="country"> {city.country}</p>
            <p className="continent"> {city.continent}</p>
            <p className="description"> {city.description}</p>
            <div className="itinerary-buttons">
              <button className="itineraryLink" onClick={() => setModalIsOpen(true)}>
                Itinerary
              </button>
            </div>
          </div>
        </>
      ) : (
        <h4>....LOADING</h4>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {/* {console.log("City ID:", city ? city._id : null)} */}
        <ItinerariesModalContent onClose={() => setModalIsOpen(false)} cityId={city ? city._id : null} />
      </Modal>
    </div>
  );
}

export default CityDetails;
