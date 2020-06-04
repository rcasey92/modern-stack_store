import React, { Component, Fragment } from 'react';

import AppOverlay from '../AppOverlay';
import SiteHeader from '../SiteHeader';

class PageShell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panelShowing: false,
            panelType: undefined,
        }
    }

    togglePanel = (type = undefined) => {
        this.setState({
            panelShowing: !this.state.panelShowing,
            panelType: type,
        });
    }


    render() {
        const { 
            panelShowing, 
            panelType,
        } = this.state;

        return (<Fragment>
            {panelShowing && <AppOverlay togglePanel={this.togglePanel}
                                panelType={panelType} 
                                panelShowing={panelShowing} />}
            <SiteHeader togglePanel={this.togglePanel}/>
        </Fragment>)
    }
}

export default PageShell;