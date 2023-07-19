import "../style/App.css";
import { useEffect } from "react";
import CityCard from "./CityCard";
import Search from "./SearchNew";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/action/citiesActions";
import "../style/Search.css";

function Cities() {
  const dispatch = useDispatch();

  let searchResult = useSelector((store) => store.citiesReducer.searchResult);
  const cities = useSelector((store) => store.citiesReducer.cities);

  useEffect(() => {
    dispatch(citiesActions.getCities());
  }, [dispatch]);

  return (
    <>
    <div className="mainContainer">
      <Search cities={cities} />
      <div className="cityCards-container">
        
        {cities && cities.length > 0 ? (
          searchResult.map((city, index) => {
            return <CityCard key={index} city={city} />;
          })
        ) : (
          <h4>....LOADING</h4>
        )}
      </div>
    </div>
    </>

  );
}

export default Cities;