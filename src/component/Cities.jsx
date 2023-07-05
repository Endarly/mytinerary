import { useEffect, useState } from 'react';
import axios from 'axios';
import CityCard from './CityCard';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClipLoader from "react-spinners/ClipLoader";
import "../style/Search.css";
import '../style/cities.css';

function Cities() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let citiesDB = await axios.get("https://endarly-api-cities-crud.onrender.com/api/cities");
      setCities(citiesDB.data.response);
      setFilteredCities(citiesDB.data.response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    filtrar(searchTerm);
  };
  
  const filtrar = (termoBusca) => {
    const searchResults = cities.filter((elemento) => {
      const cityName = elemento.name?.toLowerCase() || '';
      return cityName.includes(termoBusca.toLowerCase());
    });
    setFilteredCities(searchResults);
    console.log(searchResults);
  };

  return (
    <>
      <div className="Search">
        <input value={search} onChange={handleChange} type="text" />
        <button className="">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div>
        {isLoading ? (
          <ClipLoader color="rgba(255, 68, 0, 0.418)" loading={isLoading} size={30} css={{ display: "block", margin: "0 auto" }} />
        ) : filteredCities.length > 0 ? (
          <div className="cityCards-container">
            {filteredCities.map((city, index) => (
              <div key={index}>
                <CityCard city={city} />
              </div>
            ))}
          </div>
        ) : (
          <h4>No cities found</h4>
        )}
      </div>
    </>
  );
}

export default Cities;