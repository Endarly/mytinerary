import React, { useState } from "react"
import { useDispatch } from "react-redux"
import citiesActions from "../redux/action/citiesActions"
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
    <div className="searchContainer">
      <input className="inputSearch" placeholder="Enter your search" onChange={(e) => { filter(e) }} />
      {noResults && <p className="noResultsMessage">No cities found</p>}
    </div>
  )
}

export default Search