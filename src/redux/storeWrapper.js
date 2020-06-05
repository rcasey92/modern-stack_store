import React, {Component} from 'react';
import initializeStore from './store';

const onServer = typeof window === 'undefined';
const __MSS_REDUX_STORE__ = '__MSS_REDUX_STORE__';

const setupStore = initState => {
    if(onServer)
        return initializeStore(initState);

    if(!window[__MSS_REDUX_STORE__])
        window[__MSS_REDUX_STORE__] = initializeStore(initState);

    return window[__MSS_REDUX_STORE__];
};

export default App => (class AppWithRedux extends Component {
    static async getInitialProps(appContext) {
        // note - setting initState as undefined allows for a custom default initState
        const reduxStore = setupStore();

        appContext.ctx.reduxStore = reduxStore;

        let appProps = {};

        if(typeof App.getInitialProps === 'function')
            appProps = await App.getInitialProps(appContext)

        return {
            ...appProps,
            initialReduxState: reduxStore.getState()
        };
    }

    constructor(props) {
        super(props)
        this.reduxStore = setupStore(props.initialReduxState);
    }

    render() {
        return (<App {...this.props} reduxStore={this.reduxStore} />);
    }
});


