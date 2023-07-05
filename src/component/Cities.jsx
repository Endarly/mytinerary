import { useEffect, useState } from 'react';
import axios from 'axios';
import CityCard from './CityCard';
import Search from './Search';
import '../style/cities.css';
// import { Link as LinkRouter } from "react-router-dom";

function Cities() {
  const [cities, setCities] = useState([]);

  async function getData() {
    try {
      let citiesDB = await axios.get("https://endarly-api-cities-crud.onrender.com/api/cities");
      setCities(citiesDB.data.response);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // const handleToggle = () => {
  //     setIsExpanded(!setExpanded)
  // };
  return (
    <div className="cityCards-container">
      <Search />
      {cities && cities.length > 0 ? (
        <ul>
          {cities.map((city, index) => (
            // <LinkRouter key={index} to={'/CityDetails/'+city.id}>
            <li >
              <CityCard city={city} />
            </li>
            // </LinkRouter>

          ))}
        </ul>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Cities;



