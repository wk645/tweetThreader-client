import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createRootReducer from './createRootReducer';

export default history => {
    const rootReducer = createRootReducer(history);

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    if (process.env.NODE_ENV !== 'production') {
        const composeEnhancers = composeWithDevTools({});
        return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
    }

    return createStore(rootReducer, applyMiddleware(...middleware));
};
