import axios from "axios";

export const fetchDigimon = () => {
    return dispatch => {
        dispatch({ type: "FETCH_DIGIMON_START" });
        axios.get("https://digimon-api.herokuapp.com/api/digimon/level/rookie")
             .then(res => {
                 console.log(res)
                 dispatch({ type: "FETCH_DIGIMON_SUCCESS", payload: res.data})
             })
             .catch(err => {
                 console.log(err)
                 dispatch({ type: "FETCH_DIGIMON_FAILURE", payload: `Error ${err.response.status}: ${err.response.data}`})
             })
    }
}