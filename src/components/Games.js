import React, { Component } from 'react';
import { formatWinner, formatDate } from '../util';
import '../css/Games.css';

export default class Games extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.createList = this.createList.bind(this);
  }

  createList() {
    if (!this.props.games) {
      return null;
    }

    let games = this.props.games;
    return games.map((game) => {
      const winner = formatWinner(game.result, game.white.username, game.black.username);

      return (<tr key={game.created_at}>
        <td className={game.result === 1 ? "is-bold" : ""}>{game.white.username}</td>
        <td className={game.result === -1 ? "is-bold" : ""}>{game.black.username}</td>
        <td className="is-bold">{winner}</td>
        <td>{formatDate(game.created_at)}</td>
        <td>{game.confirmed}</td>
      </tr>)
    })
  }

  render() {
    return (
      <div className="container grid-md">
        <h3> All Games </h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>White</th>
              <th>Black</th>
              <th>Winner</th>
              <th>Date</th>
              <th>Confirmed</th>
            </tr>
          </thead>
          <tbody>
            {this.createList()}
          </tbody>
        </table>
      </div>
    )
  }
}
