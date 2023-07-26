import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/itineraries.css';

function formatDurationToHour(duration) {
  if (Number.isInteger(duration)) {
    return `${duration}h`;
  } else {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  }
}

function calculateBillCount(price) {
  if (price <= 1) {
    return 1;
  } else if (price > 1 && price < 5) {
    return Math.ceil(price);
  } else {
    return 5;
  }
}

function ItinerariesModalContent({ onClose, cityId }) {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItineraries() {
      try {
        const response = await axios.get('https://endarly-api-itineraries-crud.onrender.com/api/itineraries');
        const filteredItineraries = response.data.response.filter(itinerary => itinerary.cityId === cityId);
        setItineraries(filteredItineraries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
        setLoading(false);
      }
    }

    getItineraries();
  }, [cityId]);

  return (
    <div className="container">
      <h2 className="itinerariesHeading">MORE THAN STORIES</h2>
      <div className="imageContainer">
        <img src="https://firebasestorage.googleapis.com/v0/b/agenciaviajes-44c7b.appspot.com/o/agenciaviajes%2F186961527-sello-postal-del-puente-de-la-torre.webp?alt=media&token=86e3e0c9-f63b-46ea-b922-e442a86a4641" alt="" className="commonImage" />
      </div>
      {loading ? (
        <h4>....LOADING</h4>
      ) : itineraries.length > 0 ? (
        <ul className="itinerariesList">
          {itineraries.map((itinerary, index) => (
            <div key={itinerary._id} className="itineraryItem">
              <img className="creatorPhotoImg" src={itinerary.creatorPhoto} alt={itinerary.creatorPhoto} />
              <p className="itinararyCreatorName">{itinerary.creatorName}</p>
              <p className="itineraryName">{itinerary.nameItinerary}</p>
              <img src={itinerary.image} alt={itinerary.image} className="mainImage" />
              <p className="descriptionItineraries"> {itinerary.description}</p>
              <p><strong>Unit Price:</strong> {calculateBillCount(itinerary.unitPrice)}</p>
              <p><strong>Duration:</strong> {Number.isInteger(itinerary.duration) ? formatDurationToHour(itinerary.duration) : formatDurationToHour(itinerary.duration)}</p>
              <p><strong>Hashtags:</strong> {itinerary.hashtags}</p>
              <p><strong>Likes:</strong> {itinerary.likes}</p>
              {index !== itineraries.length - 1 && <div className="divider" />}
            </div>
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
