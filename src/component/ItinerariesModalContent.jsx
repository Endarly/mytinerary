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
      <h2 className="itinerariesHeading">More than just stories</h2>
      {loading ? (
        <h4>....LOADING</h4>
      ) : itineraries.length > 0 ? (
        <ul className="itinerariesList">
          {itineraries.map((itinerary, index) => (
            <div key={itinerary._id} className="itineraryItem">
              <div className='creatoritinerary'>
                <img className="creatorPhotoImg" src={itinerary.creatorPhoto} alt={itinerary.creatorPhoto} />
                <p className="itinararyCreatorName">{itinerary.creatorName}</p>
              </div>
              <div className='itineraryInfo'>
                <p className="itineraryName">{itinerary.nameItinerary}</p>
                <img src={itinerary.image} alt={itinerary.image} className="mainImage" />
                <p className="descriptionItineraries"> {itinerary.description}</p>
                <div className='moreDetails'>
                  <p><strong>Unit Price:</strong> ${calculateBillCount(itinerary.unitPrice)}</p>
                  <p><strong>Duration:</strong> {Number.isInteger(itinerary.duration) ? formatDurationToHour(itinerary.duration) : formatDurationToHour(itinerary.duration)}</p>
                  <p><strong>Hashtags:</strong> {itinerary.hashtags}</p>
                  <p><strong>Likes:</strong> {itinerary.likes}</p>
                </div>
                {index !== itineraries.length - 1 && <div className="divider" />}
              </div>
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
