import React, { Component } from 'react';
import { func } from 'prop-types';

import './SiteHeader.scss';

class SiteHeader extends Component{
    render() {
        const { navToggle } = this.props;

        return (<header id='header-container'>
            <div onClick={navToggle} id='icon-wrapper'/>
            <p id='header-title'/>
        </header>)
    }
}

SiteHeader.propTypes = {
    navToggle: func.isRequired
}

export default SiteHeader;