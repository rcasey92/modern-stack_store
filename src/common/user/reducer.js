import { handleActions } from 'redux-actions';

import {
    GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    SET_USER_INFO,
    SET_USER_INFO_SUCCESS,
    SET_USER_INFO_FAILURE,
    USER_LOGOUT,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
    DEFAULT_USER
} from './constants';

const initialUserState = {
    userDetails: DEFAULT_USER,
    getUserInfoSuccess: false,
    getUserInfoFailure: false,
    setUserInfoSuccess: false,
    setUserInfoFailure: false,
    userLogoutSuccess: false,
    userLogoutFailure: false
};

const userReducer = handleActions(
    {
        [GET_USER_INFO]: state => ({ // Reset state before get user check
            ...state,
            getUserInfoSuccess: false,
            getUserInfoFailure: false
        }),
        // user data supplied via action param, pulled out as payload
        [GET_USER_INFO_SUCCESS]: (state, { payload }) => ({
            ...state,
            userDetails: payload,
            getUserInfoSuccess: true,
            getUserInfoFailure: false
        }),
        [GET_USER_INFO_FAILURE]: state => ({
            ...state,
            getUserInfoSuccess: false,
            getUserInfoFailure: true
        }),
        [SET_USER_INFO]: state => ({
            ...state,
            setUserInfoSuccess: false,
            setUserInfoFailure: false
        }),
        // update user state to have new user details
        [SET_USER_INFO_SUCCESS]: ( state, { payload }) => ({
            ...state,
            userDetails: payload,
            setUserInfoSuccess: true,
            setUserInfoFailure: false
        }),
        [SET_USER_INFO_FAILURE]: state => ({
            ...state,
            setUserInfoSuccess: false,
            setUserInfoFailure: true
        }),
        [USER_LOGOUT]: state => ({
            ...state,
            userLogoutSuccess: false,
            userLogoutFailure: false
        }),
        [USER_LOGOUT_SUCCESS]: state => ({
            ...state,
            userDetails: DEFAULT_USER,
            userLogoutSuccess: true,
            userLogoutFailure: false
        }),
        [USER_LOGOUT_FAILURE]: state => ({
            ...state,
            USER_LOGOUT_SUCCESS: false,
            USER_LOGOUT_FAILURE: true
        })
    },
    { ...initialUserState }
);

export default userReducer;