import React from 'react';
import ReactDOM from 'react-dom';
import {Principal} from './WelcomePage';
import {Java} from './Java';
import {ContactMe} from './ContactMe';
import {Web} from './Web';

import {Router, Route, IndexRoute, hashHistory} from "react-router";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Principal}/>
            <Route path="Java" component={Java}/>
            <Route path="ContactMe" component={ContactMe}/>
            <Route path="Web" component={Web}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);
