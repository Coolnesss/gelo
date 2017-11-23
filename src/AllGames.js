import React, { Component } from 'react';
import { getGames, formatWinner, formatDate } from './util';
import Games from './Games';
import './css/Games.css';

export default class AllGames extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        getGames().then((response) => {
            this.setState({
                games: response.data
            });
        });
    }

    render() {
        return (
            <Games games={this.state.games}/>
        )
    }
}
