import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import 'react-notifications/lib/notifications.css';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import messagesReducer from './store/reducers/messagesReducer';

const rootReducer = combineReducers({
    messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
