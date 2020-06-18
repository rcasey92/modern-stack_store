import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import commonReducers from '../common/reducer';

const initState = {};
let store;

// TODO: Include a check if this is dev or not. If it is not, do not include dev tools
const initializeStore = (existingState = initState) => (createStore(
    commonReducers,
    existingState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
));

const storeChecks = existingState => {
    // if store is null, initialize a new one
    let _store = store ?? initializeStore(existingState);

    console.log(existingState);
    if(existingState && store) {
        _store = initializeStore({
            ...store.getState(),
            ...existingState
        });

        // reset current store
        store = undefined
    }

    if(!store) store = _store;

    return _store;
}

const useStore = (initState = {}) => {
    const store = useMemo(() => storeChecks(initState), [initState]);
    return store;
}

export default useStore;