import React, { Fragment } from 'react';
import { func, bool, string } from 'prop-types';

import { NavSidePanel, CartSidePanel } from '../Panels';

const AppOverlay = ({
    panelShowing,
    panelType,
    closeOverlay,
}) => {
    const determineWhichPanelToRender = (panelType) => {
        if(panelType === 'navigation')
            return (<NavSidePanel panelShowing={panelShowing}/>);
        if(panelType === 'cart')
            return (<CartSidePanel panelShowing={panelShowing}/>);
    }

    return (<Fragment>
        <div>{determineWhichPanelToRender(panelType)}</div>
        <div onClick={closeOverlay} id='app-overlay'/>
    </Fragment>)
}

AppOverlay.propTypes = {
    panelShowing: bool.isRequired,
    panelType: string.isRequired,
    closeOverlay: func.isRequired,
}

export default AppOverlay;