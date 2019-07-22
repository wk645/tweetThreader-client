import TwitterService from '../../services/twitter';
import types from './types';

const init = (credentials = null) => async dispatch => {
    dispatch({
        type: types.INIT_REQUEST
    });

    try {

    } catch (error) {

    }
};

const login = (email, password) => async dispatch => {
    dispatch({
        type: types.LOGIN_REQUEST
    });

    try {
        dispatch({
            type: types.LOGIN_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: types.LOGIN_FAILURE,
            meta: { error: 'Invalid credentials.' }
        });
    }
};

const logout = () => async dispatch => {
    dispatch({
        type: types.LOGOUT_REQUEST
    });

    try {
        dispatch({
            type: types.LOGOUT_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: types.LOGOUT_FAILURE,
            meta: { error: 'Failed to logout' }
        });
    }
};

const getTwitter = () => async dispatch => {
    dispatch({
        type: types.GET_TWITTER_REQUEST
    });

    try {
        const twitter = await TwitterService.getHomeTimeline();
        dispatch({
            type: types.GET_TWITTER_SUCCESS,
            payload: { profile }
        })
    } catch (error) {
        dispatch({
            type: types.GET_TWITTER_FAILURE,
            meta: { error: 'Failed to retrieve twitter information.' }
        });
    }
};

export default {
    init,
    login,
    logout,
    getTwitter
};
