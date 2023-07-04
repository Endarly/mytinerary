import React, { useState, useEffect } from 'react';
import axios from 'axios';
import underConstructionImage from '../assests/jackhanmer-construction-worker.gif';
import '../style/cities.css';
import { useParams } from 'react-router-dom';

function CitiesDetails() {
    // const [setExpanded, setIsExpanded] = useState(false);
    const [city, setCity] = useState([])

    const { id } = useParams()

    async function getCity(id) {
        let cityDB = await axios.get("https://endarly-api-cities-crud.onrender.com/api/cities/" + id);
        console.log(cityDB);
        setCity(cityDB.data.response);
    }

    useEffect(() => {
        getCity(id);
    }, [id]);

    // const handleToggle = () => {
    //     setIsExpanded(!setExpanded)
    // };

    return (
        <div>
            {city.length > 0 ? (
                <div className='containerCities'>
                    <h1>CITIES IS UNDER CONSTRUCTION
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
                    </h1>
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
}

export default CitiesDetails;