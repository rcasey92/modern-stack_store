import React, { Component, Fragment } from 'react';
// Component imports
import AppOverlay from '../AppOverlay';
import SiteHeader from '../SiteHeader';
// Utilitie/Redux imports
import UserContext from '../../common/user/userContext';
import User from '../../pages/user';

const initialWrapperState = {
    panelShowing: false,
    panelType: undefined,
};

class PageWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initialWrapperState }
    }

    togglePanel = (type = undefined) => {        
        if(type && type !== this.state.panelType){
            this.setState({
                panelShowing: true,
                panelType: type
            });
        } else {
            // ensure type is truthy before setting state 
            type && this.setState({
                panelShowing: !this.state.panelShowing,
                panelType: type,
            });
        }
    }

    // resets to initial state 
    closeOverlay = () => {
        this.setState({ ...initialWrapperState });
    }

    checkContext = () => (<UserContext.Consumer>
            {value => console.log(value)}
    </UserContext.Consumer>);

    render() {
        const { 
            panelShowing, 
            panelType,
        } = this.state;

        return (<Fragment>
                {this.checkContext()}
                {panelShowing && <AppOverlay panelType={panelType} 
                        panelShowing={panelShowing}
                        closeOverlay={this.closeOverlay} />}
            <SiteHeader togglePanel={this.togglePanel}/>
        </Fragment>)
    }
}



export default PageWrapper;