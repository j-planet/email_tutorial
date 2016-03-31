import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import HomePage from './containers/home_page.jsx';
import FramePage from './containers/frame_page.jsx';
import ChildPage from './containers/child_page.jsx';

const routes =
    < Route path="/" component={FramePage} >
        <IndexRoute component={HomePage} />
        <Route path="p" component={ChildPage} />
    </Route>;

export default (
    <Router history={browserHistory} routes={routes} />
);