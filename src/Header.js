import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { isLoggedIn, logout } from './util';
import './css/Header.css';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.logoutPressed = this.logoutPressed.bind(this);
    }

    logoutPressed() {
        logout();
        toast("Logged out successfully!", {className: 'toast toast-success'});
        this.props.history.push("/");
    }

    render() {

        const loggedIn = isLoggedIn();
        return (
        <header className="navbar">
            <NavLink className="btn btn-link" to="/">Home</NavLink>
            <NavLink className="btn btn-link" to="/new">New Game</NavLink>
            <NavLink className="btn btn-link" to="/games">Games</NavLink>

            { !loggedIn &&
                <NavLink className="btn btn-link" to="/login">Login</NavLink>
            }
            { loggedIn &&
                <a onClick={this.logoutPressed} className="btn btn-link" >Logout</a> 
            }
            
        </header>);
    }
}

export default withRouter(Header);