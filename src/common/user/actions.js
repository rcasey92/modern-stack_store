import { createAction } from 'redux-actions';

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
} from './constants';

// create get user actions
// const getUserInfo = createAction(GET_USER_INFO);
// const getUserInfoSuccess = createAction(GET_USER_INFO_SUCCESS);
// const getUserInfoFailure = createAction(GET_USER_INFO_FAILURE);

// create set user actions
const setUserInfo = createAction(SET_USER_INFO);
const setUserInfoSuccess = createAction(SET_USER_INFO_SUCCESS);
const setUserInfoFailure = createAction(SET_USER_INFO_FAILURE);

// create user logout actions
// const userLogout = createAction(USER_LOGOUT);
// const userLogoutSuccess = createAction(USER_LOGOUT_SUCCESS);
// const userLogoutFailure = createAction(USER_LOGOUT_FAILURE);

const setNewUserObject = userObject => {
    return function action(dispatch){
        dispatch(setUserInfo());
        // do this immediately for testing purposes.
        dispatch(setUserInfoSuccess(userObject));

        // can make async calls here and do your error handling, etc.
        return {
            success: true
        };
    };
}

export {
    setNewUserObject
};