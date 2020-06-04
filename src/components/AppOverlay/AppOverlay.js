import React, { Fragment } from 'react';

import { NavSidePanel, CartSidePanel } from '../Panels';

const AppOverlay = ({
    togglePanel, 
    panelShowing,
    panelType,
}) => {

    const determineWhichPanelToRender = (panelType) => {
        if(panelType === 'navigation')
            return (<NavSidePanel panelShowing={panelShowing}/>);
        if(panelType === 'cart')
            return (<CartSidePanel panelShowing={panelShowing}/>);
    }

    return (<Fragment>
        <div>{determineWhichPanelToRender(panelType)}</div>
        <div onClick={togglePanel} id='app-overlay'/>
    </Fragment>)
}

export default AppOverlay;