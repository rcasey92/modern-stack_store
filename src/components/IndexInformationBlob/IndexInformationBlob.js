import React, { Component } from 'react';

import './IndexInformationBlob.scss';
import DefaultImage from './assets/DefaultImage.jpg' ;

class IndexInformationBlob extends Component {
    render () {
        // TODO: make the wrapper a container component
        return (<div className='information-wrapper'>
            <img alt='' src={DefaultImage} className='information-background'/>
            <div className='header-wrapper'>
                <p className='information-header'>BRAND NAME</p>
            </div>
        </div>)
    }
}

export default IndexInformationBlob;