import React, { Component } from 'react';
import Leaderboard from './Leaderboard';

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
