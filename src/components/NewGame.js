import React, { Component } from 'react';
import { getPlayers, postGame, currentUserName } from '../util';
import Opponents from './Opponents';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import '../css/NewGame.css';

export default class NewGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            side: "white",
            whoWon: "white",
            opponents: [],
        };
        this.possibleOpponents = this.possibleOpponents.bind(this);

        this.onSideSelect = this.onSideSelect.bind(this);
        this.onWonSelect = this.onWonSelect.bind(this);
    }

    onSideSelect(e) {
        this.setState({
            side: e.target.value
        })
    }

    onWonSelect(e) {
        this.setState({
            whoWon: e.target.value
        })
    }

    possibleOpponents() {
        const currentUser = currentUserName();
        getPlayers().then((response) => {
            this.setState({
                opponents: response.data
                                    .map((player) => player.username)
                                    .filter(username => username !== currentUser)
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    componentWillMount() {
        this.possibleOpponents();
    }

    onSubmit = (e) => {
        e.preventDefault();

        let opponent = this.refs.opponents.refs.select.value;
        let whoWon = this.state.whoWon;
        let side = this.state.side;

        let info = {
            opponent,
            whoWon,
            side
        }

        postGame(info).then((response) => {
            toast("Game submitted!", {className: 'toast toast-success'});
        }).catch((error) => {
            let err = error.response.data.error;
            toast("Request failed: " + err, {className: 'toast toast-error'})
        });
    }

    render() {
        const currentUser = currentUserName();
        if (currentUser == null) {
            return <div className="big-message">Please <NavLink to="/login">login</NavLink> to create a new game.</div>
        }
        if (this.state.opponents && this.state.opponents.length === 0) {
            return <div className="big-message"> You are the only player :(</div>;
        }
        return (
            <div className='add-game container grid-sm'>
                <h1>New Game</h1>
                <p> To proceed, just add who you played with and who won. They will be asked to confirm.</p>

                <form onSubmit={this.onSubmit} className="form-group">

                <h3 className="form-label" >What was the result?</h3>
                    <div className="middle">
                        <label>
                            <input onChange={this.onWonSelect} value="white" type="radio" name="radioa" checked={this.state.whoWon === "white"} />
                            <div className="bishop box">
                                <span>White</span>
                            </div>
                        </label>

                        <label>
                            <input onChange={this.onWonSelect} value="black" type="radio" checked={this.state.whoWon === "black"} name="radioa"/>
                            <div className="knight box">
                                <span>Black</span>
                            </div>
                        </label>

                        <label>
                            <input onChange={this.onWonSelect} value="draw" type="radio" checked={this.state.whoWon === "draw"} name="radioa"/>
                            <div className="king box">
                                <span>Draw</span>
                            </div>
                        </label>
                    </div>
                    <br/>


                    <h3 className="form-label" >Which side were you on?</h3>
                    <div className="middle">
                        <label>
                            <input onChange={this.onSideSelect} value="white" type="radio" name="radio" checked={this.state.side === "white"} />
                            <div className="bishop box">
                                <span>White</span>
                            </div>
                        </label>

                        <label>
                            <input onChange={this.onSideSelect} value="black" type="radio" checked={this.state.side === "black"} name="radio"/>
                            <div className="knight box">
                                <span>Black</span>
                            </div>
                        </label>
                    </div>
                    <br/>


                    <Opponents
                        opponents={this.state.opponents}
                        ref="opponents"
                    />

                    <br/>
                    <input className="btn margin-btm" type="submit" value="Add game" />

                    <br/>

                    </form>


            </div>
        )
    }
}
