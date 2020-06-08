import React, { Component } from 'react';
import { func } from 'prop-types';

import { useRouter } from 'next/router';

const ICONWRAPPER = 'icon-wrapper';
const NAVIGATION = 'navigation';
const CART = 'cart';
const USER = 'user';

const SiteHeader = ({ togglePanel }) => {
    const router = useRouter();

    const handleUserNavClick = event => {
        event.preventDefault();
        router.push(`/${USER}`)
    };

    return (<header id='header-container'>
        <div onClick={() => togglePanel(NAVIGATION)} id={ICONWRAPPER} className={NAVIGATION}/>
        <div id={ICONWRAPPER} onClick={handleUserNavClick} className={USER}/>
        <div onClick={() => togglePanel(CART)} id={ICONWRAPPER} className={CART}/>
    </header>)
}

SiteHeader.propTypes = {
    togglePanel: func.isRequired
}

export default SiteHeader;