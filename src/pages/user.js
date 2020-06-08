import React, { Component, Fragment } from 'react';
import Head from 'next/head';

import PageWrapper from '../components/PageWrapper';

class User extends Component {
    render() {
        return (<Fragment>
            <Head>User</Head>
            <PageWrapper />
            <div>On User page</div>
        </Fragment>)
    }
}

export default User;