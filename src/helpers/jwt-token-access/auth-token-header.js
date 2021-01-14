import {loadState} from "../../store/localStorage";

export const authHeader = () => {
    const obj = loadState()
    if (obj && obj.tokenId) {
        return {Authorization: obj.tokenId};
    } else {
        return {};
    }
}

export const authHeaderGetApi = () => {
    const obj = loadState()
    return {Authorization: `Bearer ${obj.token}`};
}