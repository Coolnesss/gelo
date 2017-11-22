import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Leaderboard from './components/Leaderboard';

export default class Home extends Component {
    render() { 
        return (
        <div>
            <h1> Welcome </h1>
            <Leaderboard />
        </div>
        )
    }
}