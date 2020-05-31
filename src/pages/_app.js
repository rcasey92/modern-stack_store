import React from 'react';
import App from 'next/app';
import { withRouter} from 'next/router';

import '../static/styles/styles.scss';

class StoreFront extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx)) || pageProps;

        return { pageProps };
    }

    render () {
        const { Component, pageProps } = this.props;

        return <Component pageProps={pageProps} />
    }
}

export default StoreFront;