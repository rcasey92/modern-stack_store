import React, { Component, Fragment } from 'react';

import AppOverlay from '../AppOverlay';
import SiteHeader from '../SiteHeader';

import './PageShell.scss';

class PageShell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panelShowing: false,
        }
    }

    togglePanel = () => {
        this.setState({panelShowing: !this.state.panelShowing});
    }

    render() {
        return (<Fragment>
            {this.state.panelShowing ? <AppOverlay navToggle={this.togglePanel}/> : null}
            <SiteHeader navToggle={this.togglePanel}/>
        </Fragment>)
    }
}

export default PageShell;