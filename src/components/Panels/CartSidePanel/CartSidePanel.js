import React, { Component } from 'react';

class CartSidePanel extends Component {
    render() {
        const { panelShowing } = this.props;
        let showOrHidePanel = panelShowing ? "visible" : "hidden"

        return (<div id='panel' className={`cart ${showOrHidePanel}`}>
            <div id='cart-panel-content'>
                <p>Can you spot the item that doesn't belong?</p>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                    <li>Bumblebees</li>
                    <li>Aenean</li>
                    <li>Consectetur</li>
                </ul>
            </div>
        </div>)
    }
}

export default CartSidePanel;