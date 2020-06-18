import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import { useRouter } from 'next/router';

import { selectUserDetails } from '../../common/user/selectors'
import { setNewUserObject } from '../../common/user/actions';

const ICONWRAPPER = 'icon-wrapper';
const NAVIGATION = 'navigation';
const CART = 'cart';
const USER = 'user';

const actionTestObject = {
    name: "Ryan Casey",
    email: "Ryan.c4@me.com",
    subscriptionType: "premium"
};

const SiteHeader = ({ togglePanel, userDetails, setNewUserObject }) => {
    const router = useRouter();

    const handleUserNavClick = event => {
        event.preventDefault();
        setNewUserObject(actionTestObject);
        router.push(`/${USER}`)
    };

    return (<header id='header-container'>
        <div onClick={() => togglePanel(NAVIGATION)} id={ICONWRAPPER} className={NAVIGATION}/>
        <div onClick={handleUserNavClick} id={ICONWRAPPER}  className={USER}/>
        <div onClick={() => togglePanel(CART)} id={ICONWRAPPER} className={CART}/>
    </header>)
}

const mapStateToProps = (state, props) => ({
    userDetails: selectUserDetails(state, props)
});

const mapDispatchToProps = {
    setNewUserObject
};

SiteHeader.propTypes = {
    togglePanel: func.isRequired,
    userDetails: shape().isRequired,
    setNewUserObject: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);