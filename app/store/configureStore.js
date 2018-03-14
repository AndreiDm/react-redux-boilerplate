import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                middleware,
                logger,
                thunk
            )
        )
    );
}
