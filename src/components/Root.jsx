import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';

const Root = ({ history, store }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

Root.propTypes = {
    history: PropTypes.shape({}).isRequired,
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
        replaceReducer: PropTypes.func.isRequired
    }).isRequired
};

export default Root;
