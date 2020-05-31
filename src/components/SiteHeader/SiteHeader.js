import React, { Component } from 'react';
import { func } from 'prop-types';

import { 
    ICONWRAPPER,
    NAVIGATION,
    CART,
    USER,
} from '../../common/shell/constants';

class SiteHeader extends Component{
    render() {
        const { togglePanel } = this.props;

        return (<header id='header-container'>
            <div onClick={() => togglePanel(NAVIGATION)} id={ICONWRAPPER} className={NAVIGATION}/>
            <div id={ICONWRAPPER} className={USER}/>
            <div onClick={() => togglePanel(CART)} id={ICONWRAPPER} className={CART}/>
        </header>)
    }
}

SiteHeader.propTypes = {
    togglePanel: func.isRequired
}

export default SiteHeader;