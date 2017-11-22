import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getPlayers } from '../util';

export default class Leaderboard extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.createList = this.createList.bind(this);
    }

    componentWillMount() {
        getPlayers().then((response) => {
            this.setState({
                players: response.data
            });
        });
    }

    createList() {

        if (!this.state.players) {
            return null;
        }

        let players = this.state.players.sort((a, b) => {
            return a.elo < b.elo
        })

        console.log(players);

        return players.map((player, index) => {
            return (<tr key={ player.username }>
                <td>{ index + 1 }</td>
                <td>{ player.username }</td>
                <td>{ player.elo }</td>
            </tr>)
        })
    }

    render() { 
        return (
            <div className="leaderboard container grid-md">
            <h3> Leaderboard </h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>GELO</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.createList() }
                    </tbody>
                    </table>
            </div>
        )
    }
}