import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/Header.css';

export default class Header extends Component {
    render() {
        return (
        <header className="navbar">        
            <NavLink className="btn btn-link" to="/">Home</NavLink>
            <NavLink className="btn btn-link" to="/login">Login</NavLink>
        </header>);
    }
}