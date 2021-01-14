import {
    GET_ALL_PARTNER,
    GET_ALL_PARTNER_SUCCESS,
    GET_ALL_PARTNER_ERROR
} from './actionTypes'

export const getAllPartner = () => ({
    type: GET_ALL_PARTNER,
});

export const getAllPartnerSuccess = (response) => {
    return {
        type: GET_ALL_PARTNER_SUCCESS,
        payload: response,
    };
};

export const apiError = (error) => {
    return {
        type: GET_ALL_PARTNER_ERROR,
        payload: error,
    };
};