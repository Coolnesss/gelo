import React, { Component } from 'react';
import { getPlayers, postGame } from './util';
import Opponents from './components/Opponents';

export default class NewGame extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.possibleOpponents = this.possibleOpponents.bind(this);
    }

    possibleOpponents() {
        getPlayers().then((response) => {
            this.setState({
                opponents: response.data.map((player) => player.username)
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
        let whoWon = this.refs.whoWon.value;
        let side = this.refs.side.value;

        

    }

    render() { 
        return (
            <div className='add-game container grid-sm'>
                <h1>New Game</h1>
                <p> To proceed, just add who you played with and who won. They will be asked to confirm.</p>

                <form onSubmit={this.onSubmit} className="form-group">
                    <label className="form-label" >Who won?</label> 
                    <div className="form-group">
                        <select ref="whoWon" className="form-select">
                            <option>White</option>
                            <option>Black</option>
                            <option>Draw</option>
                        </select>
                    </div>

                    <label className="form-label" >Which side were you on?</label> 
                    <div className="form-group">
                        <select ref="side" className="form-select">
                            <option>White</option>
                            <option>Black</option>
                        </select>
                    </div>

                    <Opponents
                        opponents={this.state.opponents}
                        ref="opponents"
                    />

                    <br/>
                    <input className="btn" type="submit" value="Add game" />
                    
                    </form>

            </div>
        )
    }
}