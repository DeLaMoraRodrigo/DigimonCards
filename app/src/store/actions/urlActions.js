const USE_ROOKIE_URL = "USE_ROOKIE_URL";
const USE_CHAMPION_URL = "USE_CHAMPION_URL";
const USE_ULTIMATE_URL = "USE_ULTIMATE_URL";
const USE_MEGA_URL = "USE_MEGA_URL";

export const rookieUrl = () => {
    return {
        type: USE_ROOKIE_URL,
        payload: "rookie"
    }
}

export const championUrl = () => {
    return {
        type: USE_CHAMPION_URL,
        payload: "champion"
    }
}

export const ultimateUrl = () => {
    return {
        type: USE_ULTIMATE_URL,
        payload: "ultimate"
    }
}

export const megaUrl = () => {
    return {
        type: USE_MEGA_URL,
        payload: "mega"
    }
}