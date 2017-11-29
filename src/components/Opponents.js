import React, { Component } from 'react';

class Opponents extends Component {

    render() {
        const { opponents } = this.props;
        if (!opponents) {
            return (<div className="loading loading-lg"></div>);
        }

        return (
            <div>
                <h3 className="form-label" >Who did you play with?</h3>
                <div className="form-group">
                    <select ref="select" className="form-select">
                        {
                            opponents.map(player => {
                                return <option key={player}> { player } </option>
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }
};

export default Opponents;
