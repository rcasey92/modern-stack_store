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
    let _store = store && initializeStore(existingState);

    if(existingState && store) {
        _store = initializeStore({
            ...store.getState(),
            ...existingState
        });

        store = undefined
    }

    if(!store) store = _store;

    return _store;
}

const useStore = initState => {
    const store = useMemo(() => storeChecks(initState), [initState]);
    return store;
}

export default useStore;