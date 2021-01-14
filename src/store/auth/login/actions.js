import {
    API_ERROR,
    AUTHORIZATION_USER,
    LOGIN_SUCCESS,
    LOGIN_USER,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
} from './actionTypes'

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: {user}
    }
}

export const loginSuccess = (user,isLoginRedirect,loginSuccess) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {user,isLoginRedirect,loginSuccess}
    }
}
export const authorizationUser = (isLoginRedirect) => {
    return {
        type: AUTHORIZATION_USER,
        payload: {isLoginRedirect}
    }
}

export const logoutUser = (isLogout) => {
    return {
        type: LOGOUT_USER,
        payload: {isLogout}
    }
}

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
        payload: {}
    }
}


export const apiError = (error) => {
    return {
        type: API_ERROR,
        payload: error
    }
}
