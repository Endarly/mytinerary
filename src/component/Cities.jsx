import "../style/App.css";
import React, { useEffect, useState } from "react";
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

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <h1>....LOADING</h1>
          )}
        </div>
        {showScrollButton && (
          <button className="scroll-button" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </>
  );
}

export default Cities;
