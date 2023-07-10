import "../style/App.css"
import citiesActions from "../redux/action/citiesActions"
import { useDispatch } from "react-redux"

function Search(props){
const dispatch = useDispatch()

async function filter(e){

    let searchResult = await props.cities.filter(city=>city.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    dispatch(citiesActions.searchResult(searchResult))
}
    return(
        <div className="searchContainer">
            <input className="inputSearch" placeholder="Enter your search" onChange={(e)=>{filter(e)}}/>
        </div>
    )
}

export default Search