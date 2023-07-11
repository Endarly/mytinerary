import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/cities.css';
import { useParams } from 'react-router-dom';


function CityDetails() {
    const { id } = useParams();
    const [city, setCity] = useState(null);

    async function getCity(id) {
        try {
            const response = await axios.get(`https://endarly-api-cities-crud.onrender.com/api/cities/${id}`);
            setCity(response.data.response);
            console.log(response.data.response)
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
              <img src={city.image} alt={city.name} />
              <div className='cityDetails'>
                <div className='name-avatar-wrapper'>
                  <h3>{city.name}</h3>
                  <img src={city.avatarCountry} alt={city.country} className='avatar' />
                </div>
                <p className="country"> {city.country}</p>
                <p className="continent"> {city.continent}</p>
                <p className="description"> {city.description}</p>
                <div className="itinerary-buttons">
                  <button className="itineraryLink ">Itinerary 1</button>
                  <button className="itineraryLink">Itinerary 2</button>
                  <button className="itineraryLink">Itinerary 3</button>
                </div>
              </div>
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      );
      
}

export default CityDetails;
