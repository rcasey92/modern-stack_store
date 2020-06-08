import React from 'react';
import App from 'next/app';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';

import useStore from '../redux/store';

import '../static/styles/styles.scss';

export default withRouter(function App({ Component, pageProps }) {
    const reduxStore = useStore(pageProps.initialReduxState);

    return (<Provider store={reduxStore}>
        <Component pageProps={pageProps} />
    </Provider>);
});