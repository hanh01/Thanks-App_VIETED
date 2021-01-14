import {
    GET_ALL_PARTNER,
    GET_ALL_PARTNER_SUCCESS,
    GET_ALL_PARTNER_ERROR
} from './actionTypes'

const initialState = {
    partners: [],
}

const Partner = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PARTNER:
            state = { ...state };
            break;
        case GET_ALL_PARTNER_SUCCESS:
            state = { ...state, partners: action.payload };
            break;
        case GET_ALL_PARTNER_ERROR:
            state = { ...state, error: action.payload };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default Partner;