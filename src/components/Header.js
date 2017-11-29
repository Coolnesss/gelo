import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { isLoggedIn, logout, currentUserName } from '../util';
import '../css/Header.css';
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
        const currentUser = currentUserName();
        return (
        <header className="navbar">
            <section className="navbar-section">
                <NavLink className="btn btn-link" to="/">Home</NavLink>
                <NavLink className="btn btn-link" to="/new">New Game</NavLink>
                <NavLink className="btn btn-link" to="/games">Games</NavLink>
                <NavLink className="btn btn-link" to="/notifications">Notifications</NavLink>
            </section>
            {loggedIn &&
                <NavLink className="btn btn-link" to="/my_page">My page</NavLink>
            }
             { !loggedIn &&
                <NavLink className="btn btn-link" to="/login">Login</NavLink>
            }
            { loggedIn &&
                <span>
                    <div className="btn btn-link" >Logged in as {currentUser}</div>
                    <a onClick={this.logoutPressed} className="btn btn-link" >Logout</a>
                </span>
            }

        </header>);
    }
}

export default withRouter(Header);
