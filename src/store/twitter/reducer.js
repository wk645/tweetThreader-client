import types from './types';

export const initialState = {
    isInitializing: false,
    hasInitError: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isLoggedin: false,
    twitter: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_REQUEST:
            return {
                ...state,
                isInitializing: true,
                hasInitError: false,
                isLoggedIn: false,
                isGettingTwitter: false,
                twitter: null
            };
        case types.INIT_SUCCESS:
            return {
                ...state,
                isInitializing: false,
                isLoggedIn: action.payload.isLoggedIn,
                twitter: action.payload.twitter
            };
        case types.INIT_FAILURE:
            return {
                ...state,
                isInitializing: false,
                hasInitError: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false
            };
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggingIn: false,
                twitter: null
            };
        case types.GET_TWITTER_REQUEST:
            return {
                ...state,
                isGettingTwitter: true,
                twitter: null
            };
        case types.GET_TWITTER_SUCCESS:
            return {
                ...state,
                isGettingTwitter: false,
                twitter: action.payload.twitter
            };
        case types.GET_TWITTER_FAILURE:
            return {
                ...state,
                isGettingTwitter: false
            };
        default:
            return state;
    }
};

export default reducer;
