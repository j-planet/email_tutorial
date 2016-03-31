/**
 * Created by jj on 1/19/16.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import RootReducer from './reducers/rootReducer';
import routes from './routes.jsx';
import Async from './middlewares/async.jsx';

var Styles = require('../css/app.scss');    // just to compile styles


ReactDOM.render(
    <Provider store={applyMiddleware(Async)(createStore)(RootReducer)}>
        { routes }
    </Provider>
    ,

    document.getElementById('app-container')
);