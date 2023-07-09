import React, { useState, useEffect } from 'react';
import axios from 'axios';
import underConstructionImage from '../assests/jackhanmer-construction-worker.gif';
import '../style/cities.css';
import { useParams } from 'react-router-dom';


function CityDetails() {
    const { id } = useParams();
    const [city, setCity] = useState(null);

    async function getCity(id) {
        try {
            const response = await axios.get(`https://endarly-api-cities-crud.onrender.com/api/cities/${id}`);
            setCity(response.data);
        } catch (error) {
            console.error("Error fetching city:", error);
        }
    }

    useEffect(() => {
        getCity(id);
    }, [id]);

    return (
        <div>
            {city ? (
                <div className='containerCities'>
                    <h1>CITIES IS UNDER CONSTRUCTION</h1>
                    <h3>CITY NAME: {city.name}</h3>
                    <p>Country: {city.country}</p>
                    <p>Description: {city.description}</p>
                    {/* Other city details */}
                    {/* className='title'>{city[0].className} */}
                    {/* siempre buscar la posicion 0 [0] */}
                    <img
                        src={underConstructionImage}
                        alt="Under Construction"
                        style={{ width: '40%', height: '90%' }}
                    />
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
}

export default CityDetails;
