import React from 'react';
import App from 'next/app';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';

import useStore from '../redux/store';
import UserContext from '../common/user/userContext';

import '../static/styles/styles.scss';

export default withRouter(function App({ Component, pageProps }) {
    const reduxStore = useStore(pageProps.initialReduxState);
    const currentState = reduxStore.getState();
    const user = currentState && currentState.user;
    const userDetails = user && user.userDetails;

    return (<Provider store={reduxStore}>
        <UserContext.Provider value={userDetails}>
            <Component pageProps={pageProps} />
        </UserContext.Provider>
    </Provider>);
});