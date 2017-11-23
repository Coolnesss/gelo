import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getNotifications, approveGame } from '../util';
import '../css/Notifications.css';
import moment from 'moment';
import { toast } from 'react-toastify';

export default class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.createList = this.createList.bind(this);
        this.refreshGames = this.refreshGames.bind(this);
    }

    refreshGames() {
        getNotifications().then((response) => {
            this.setState({
                games: response.data
            });
        });
    }

    componentWillMount() {
        this.refreshGames();
    }

    formatResult = (won) => {
        if (won === 1) {
            return "you beat him."
        } else if (won === -1) {
            return "you lost against him."
        }
        return "you two drew a game."
    }

    formatTitle = (won) => {
        if (won === 1) {
            return <div className="tile-title text-success">Victory</div>
        } else if (won === -1) {
            return <div className="tile-title text-error">Loss</div>
        }
        return <div className="tile-title">Draw</div>
    }

    approve = (game) => {
        approveGame(game.id).then((response) => {
            toast("Game approved!", {className: 'toast toast-success'});
            this.refreshGames();
        }).catch((error) => {
            toast("Something went wrong.", {className: 'toast toast-error'});            
        });
    }

    createList() {

        if (!this.state.games) {
            return null;
        }

        let games = this.state.games;
        
        return games.map((game) => {
            return (
                <div key={game.created_at} className="notification tile tile-centered">
                    <div className="tile-content">
                    { this.formatTitle(game.won) }
                    <div className="notification-body tile-subtitle text-gray">
                        <b>{ game.added_by.username }</b> claimed on <b>{ moment(game.created_at).format("DD.MM [at] HH.MM") }</b> that { this.formatResult(game.won) }</div>
                    </div>
                    <div className="tile-action btn-group">
                        <button onClick={() => {this.approve(game)}} className="btn btn-sm">
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