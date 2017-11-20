import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { isLoggedIn } from './util';
import './css/Header.css';

export default class Header extends Component {
    render() {

        const loggedIn = isLoggedIn();
        console.log(loggedIn);
        return (
        <header className="navbar">
            <NavLink className="btn btn-link" to="/">Home</NavLink>
            { !loggedIn &&
                <NavLink className="btn btn-link" to="/login">Login</NavLink>
            }
            { loggedIn &&
                <p> Logged in</p>
            }
            
        </header>);
    }
}