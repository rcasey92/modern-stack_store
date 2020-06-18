import { combineReducers } from 'redux';

import cartReducer from './cart/reducer';
import userReducer from './user/reducer';

const commonReducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
});

export default commonReducers;