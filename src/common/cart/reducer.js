import { handleActions } from 'redux-actions';

import {
    GET_CART_STATUS
} from './constants';

const initialCartState = {
    cart: {},
    placeHolderState: false
};

const cartReducer = handleActions(
    {
        [GET_CART_STATUS]: state => ({
            ...state,
            placeHolderState: !placeHolderState
        })
    }, 
    { ...initialCartState }
);

export default cartReducer;