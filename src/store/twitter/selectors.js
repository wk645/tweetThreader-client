const getIsInitializing = state => state.twitter.isInitializing;
const getHasInitError = state => state.twitter.hasInitError;
const getIsLoggingIn = state => state.twitter.isLoggingIn;
const getIsLoggedIn = state => state.twitter.isLoggedIn;
const getIsLoggingOut = state => state.twitter.isLoggingOut;
const getTwitter = state => state.twitter.twitter;

export default {
    getIsInitializing,
    getHasInitError,
    getIsLoggingIn,
    getIsLoggedIn,
    getIsLoggingOut,
    getTwitter
};
