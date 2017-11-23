import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getNotifications } from '../util';
import '../css/Notifications.css';

export default class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.createList = this.createList.bind(this);
    }

    componentWillMount() {
        getNotifications().then((response) => {
            this.setState({
                games: response.data
            });
            console.log(response);
        });
    }

    createList() {

        if (!this.state.games) {
            return null;
        }

        let games = this.state.games;
        
        return games.map((game) => {
            return (
                <div className="notification tile tile-centered">
                    <div className="tile-content">
                    <div className="tile-title"><b>Loss</b></div>
                    <div className="notification-body tile-subtitle text-gray">
                        <b>{ game.added_by.username }</b> claimed on <b>{ new Date(game.created_at).getDate() }</b> that you <b> lost </b> against him</div>
                    </div>
                    <div className="tile-action btn-group">
                        <button className="btn btn-sm">
                        Approve
                        </button>
                        <button className="btn btn-sm text-error">
                        Reject
                        </button>
                    </div>
                </div>        
            );
        });
    }

    render() { 
        return (
            <div className="container grid-sm">
            <h3> Unconfirmed games </h3>
            <p className="centered"> Please confirm or reject these games </p>
                { this.createList() }
            </div>
        )
    }
}