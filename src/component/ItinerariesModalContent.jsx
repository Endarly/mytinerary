import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/itineraries.css'

function ItinerariesModalContent({ onClose, cityId }) {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    async function getItineraries() {
      try {
        const response = await axios.get('https://endarly-api-itineraries-crud.onrender.com/api/itineraries');
        const filteredItineraries = response.data.response.filter(itinerary => itinerary.cityId === cityId);
        setItineraries(filteredItineraries);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
      }
    }

    getItineraries();
  }, [cityId]);

  return (
    <div className='containerItineraries'>
      <h2>Itineraries</h2>
      {itineraries.length > 0 ? (
        <ul>
          {itineraries.map((itinerary) => (
            <li key={itinerary._id}>
              <p>Name: {itinerary.nameItinerary}</p>
              <img className="creatorPhotoImg" src={itinerary.creatorPhoto} alt={itinerary.creatorPhoto} />
              <p>Creator Name: {itinerary.creatorName}</p>
              <img src={itinerary.image} alt={itinerary.image} />
              <p>Creator: {itinerary.creatorName}</p>
              <p>description: {itinerary.description}</p>
              <p>Unit Price: {itinerary.unitPrice}</p>
              <p>Duration: {itinerary.duration}</p>
              <p>Hashtags: {itinerary.hashtags}</p>
              <p>Likes: {itinerary.likes}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No itineraries available for this city.</p>
      )}
      <button className="closeButton" onClick={onClose}>Close</button>
    </div>
  );
}

export default ItinerariesModalContent;
