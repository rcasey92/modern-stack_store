import { combineReducers } from 'redux';

import cartReducer from './cart/reducer';

const commonReducers = combineReducers({
    cart: cartReducer
});

export default commonReducers;