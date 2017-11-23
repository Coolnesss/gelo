import React, { Component } from 'react';
import { getMyGames, toastOnError, currentUserName } from './util';
import Games from './Games';
import './css/MyPage.css';

export default class MyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    getMyGames().then((response) => {
      this.setState(
        {
          games: response.data
        }
      )
    }, () => {
      toastOnError("Couldn't fetch my games");
    });
  }

  render() {
    const currentUser = currentUserName();
    return(
      <div>
        <h2 className="my-page-container" >
          {currentUser}
        </h2>
        {this.state.games && this.state.games.map(game => {
          return (
            <Games games={this.state.games}/>
          )
        })
        }
      </div>
    );
  }
}
