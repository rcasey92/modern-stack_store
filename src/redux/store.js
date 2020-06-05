import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import commonReducers from '../common/reducer';

const initReduxState = {};

// TODO: Include a check if this is dev or not. If it is not, do not include dev tools
// TODO: Also add reducers to this when they're written
const initializeStore = () => (createStore(
    commonReducers,
    initReduxState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
));

export default initializeStore;