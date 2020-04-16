const urlState = "rookie";

export const urlReducer = (state = urlState, action) => {
    switch (action.type) {
        case "USE_ROOKIE_URL":
            return action.payload;
        case "USE_CHAMPION_URL":
            return action.payload;
        case "USE_ULTIMATE_URL":
            return action.payload;
        case "USE_MEGA_URL":
            return action.payload;
        default:
            return state;
    }
}