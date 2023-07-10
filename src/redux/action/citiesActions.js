import axios from "axios";

const citiesActions = {

    searchResult: (filterResult) => {
        return (dispatch, getState) => {
            dispatch({ type: "searchResult", payload: filterResult })
        }
    },
    getCities : ()=>{
        return async (dispatch, getState)=>{
            const res = await axios.get("https://endarly-api-cities-crud.onrender.com/api/cities")
            dispatch({type:"loadCities", payload: res.data.response})
            //console.log(res)
        }
    }
}
export default citiesActions;