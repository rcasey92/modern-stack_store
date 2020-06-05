import React from 'react';
import App from 'next/app';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';

import withReduxStore from '../redux/storeWrapper';

import '../static/styles/styles.scss';

class StoreFront extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx)) || pageProps;

        return { pageProps };
    }

    render () {
        const { Component, pageProps, reduxStore } = this.props;

        return (<Provider store={reduxStore}>
            <Component pageProps={pageProps} />
        </Provider>);
    }
}

export default withRouter(
    withReduxStore(StoreFront)
);