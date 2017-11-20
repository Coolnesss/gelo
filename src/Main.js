import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';

export default class Main extends Component {
    render() { 
        return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </div>
        )
    }
}