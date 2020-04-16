const initialState = []

export const digimonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DIGIMON_START":
            return [
                ...state
            ]
        case "FETCH_DIGIMON_SUCCESS":
            return [
                ...state,
                ...action.payload
            ]
        case "FETCH_DIGIMON_FAILURE":
            return [
                ...state
            ]
        default:
            return state;
    }
}