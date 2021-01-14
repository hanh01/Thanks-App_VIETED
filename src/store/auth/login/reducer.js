import {
    API_ERROR,
    AUTHORIZATION_USER,
    LOGIN_SUCCESS,
    LOGIN_USER,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
} from './actionTypes'
import {loadState} from "../../localStorage";

const initialState = {
    error: '',
    loading: true,
    authUser: loadState() || {},
    isLoginRedirect: false,
    loginSuccess: false,
    isLogout: false,
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return state = {...state, loading: true}
        case  AUTHORIZATION_USER:
            return Object.assign({}, state, {
                isLoginRedirect: action.payload.isLoginRedirect
            })
        case LOGIN_SUCCESS:
            return Object.assign({},
                state,
                {
                    authUser: action.payload.user,
                    loading: false,
                    isLoginRedirect: action.payload.isLoginRedirect,
                    loginSuccess: action.payload.loginSuccess,
                    isLogout: false,
                })
        case LOGOUT_USER:
            return state = {...state, isLogout: action.payload.isLogout}
        case LOGOUT_USER_SUCCESS:
            return Object.assign({}, state, {authUser: {}})
        case API_ERROR:
            return state = {...state, error: action.payload, loading: false}
        default:
            state = {...state}
            break
    }
    return state
}

export default login