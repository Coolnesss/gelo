import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import NewGame from './NewGame';
import Notifications from './components/Notifications';

export default class Main extends Component {
    render() { 
        return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/new' component={NewGame} />
                <Route exact path='/notifications' component={Notifications} />
            </Switch>
        </div>
        )
    }
}