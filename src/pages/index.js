import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage';

class IndexPage extends Component {
    render() {
        return (<Fragment>
            <Head>Test title</Head>
            <HomePage/>
        </Fragment>)
    }
}

export default IndexPage;