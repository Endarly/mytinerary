import { useEffect, useState } from 'react';
import axios from 'axios';
import CityCard from './CityCard';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Search.css"
import '../style/cities.css';
// import { Link as LinkRouter } from "react-router-dom";

function Cities() {
  const [cities, setCities] = useState([]);
  const [cityList, setCityList] = useState([]); // datos estaticos
  const [search, setSearch] = useState(""); // busqueda

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
  const handleChange = (e) => {
    setSearch(e.target.value)
    filtrar(e.target.value)
    console.log(e.target.value)
}

const filtrar = (termoBusca) => {
    var searchResults = cityList.filter((elemento) => {
        if (elemento.nome.toString().toLowerCase().includes(termoBusca.toLowerCase())) {
            return elemento
        }
    })
    setCityList(searchResults)
}


  return (
    <>
      <div className="Search">
            <input value={search} onChange={handleChange} type="text" />
            <button className="">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>

      <div>
        {cities && cities.length > 0 ? (
          <div className="cityCards-container">
            {cities.map((city, index) => (
              // <LinkRouter key={index} to={'/CityDetails/'+city.id}>
              <div key={index}>
                <CityCard city={city} />
              </div>
              // </LinkRouter>

            ))}
         </div>
        ) : (
          <h4>Loading</h4>
        )}
      </div>

    </>
  );
}

export default Cities;