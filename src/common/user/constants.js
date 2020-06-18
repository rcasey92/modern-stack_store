const GET_USER_INFO = 'user/GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'user/GET_USER_INFO_SUCCESS';
const GET_USER_INFO_FAILURE = 'user/GET_USER_INFO_FAILURE';
const SET_USER_INFO = 'user/SET_USER_INFO';
const SET_USER_INFO_SUCCESS = 'user/SET_USER_INFO_SUCCESS'; // Set success and failure, this can be throw after API calls to report their results
const SET_USER_INFO_FAILURE = 'user/SET_USER_INFO_FAILURE';
const USER_LOGOUT = 'user/USER_LOGOUT';
const USER_LOGOUT_SUCCESS = 'user/USER_LOGOUT_SUCCESS';
const USER_LOGOUT_FAILURE = 'user/USER_LOGOUT_FAILURE';

const DEFAULT_USER = {
    name: 'Default',
    email: '',
    subscriptionType: 'inactive',
};

export {
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
};
