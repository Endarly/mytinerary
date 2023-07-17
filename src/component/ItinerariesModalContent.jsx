import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItinerariesModalContent({ onClose, cityId }) {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    async function getItineraries() {
      try {
        const response = await axios.get('https://endarly-api-itineraries-crud.onrender.com/api/itineraries');
        const filteredItineraries = response.data.response.filter(itinerary => itinerary.cityId === response.data.response[0].cityId);
        setItineraries(filteredItineraries);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
      }
    }

    getItineraries();
  }, []);

  return (
    <div>
      <h2>Itineraries</h2>
      {itineraries.length > 0 ? (
        <ul>
          {itineraries.map((itinerary) => (
            <li key={itinerary._id}>
              <p>City ID: {itinerary.cityId}</p>
              <p>Name: {itinerary.nameItinerary}</p>
              <p>Creator: {itinerary.creatorName}</p>
              <p>Creator Photo: {itinerary.creatorPhoto}</p>
              <p>Unit Price: {itinerary.unitPrice}</p>
              <p>Duration: {itinerary.duration}</p>
              <p>Hashtags: {itinerary.hastags}</p>
              <p>Likes: {itinerary.likes}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No itineraries available for this city.</p>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ItinerariesModalContent;
