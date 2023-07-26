import React, { useState } from "react"
import { useDispatch } from "react-redux"
import citiesActions from "../redux/action/citiesActions"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Search.css"

function Search(props) {
  const dispatch = useDispatch()
  const [noResults, setNoResults] = useState(false)

  async function filter(e) {
    const searchValue = e.target.value.toLowerCase().trim()
    let searchResult = await props.cities.filter(city =>
      city.name.toLowerCase().trim().includes(searchValue)
    )
    dispatch(citiesActions.searchResult(searchResult))
    setNoResults(searchResult.length === 0)
  }

  return (
    <>
    <div className="searchContainer">
      <i><FontAwesomeIcon icon={faSearch}/></i>
      <input type="text" placeholder="Enter your search" onChange={(e) => { filter(e) }}/>
    </div>
    <div className="noResultsMessage">{noResults && <p>No cities found</p>}</div>
    </>
  )
}

export default Search