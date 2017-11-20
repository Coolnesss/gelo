import React, { Component } from 'react';
import { login, saveToken } from './util';
import { toast } from 'react-toastify';

export default class Login extends Component {

    constructor(props) {
        super(props);
    } 

    sendRequest = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        login(username, password).then((response) => {
            saveToken(response.data.token);
            toast("Logged in successfully!", {className: 'toast toast-success'});
            this.props.history.push('/');
        }).catch((error) => {
            console.error(error);
        })

    }

    render() {
        return (
            <div className="login-form container grid-sm">
                <h1>Login</h1>
                <form className="form-group" onSubmit={this.sendRequest} id="login">
                    <label className="form-label" >Username</label>
                    <input ref="username" type="text" className="form-input" placeholder="Username" />
                    <label className="form-label" >Password</label>
                    <input ref="password" type="password" className="form-input" placeholder="Password" />
                    <br/>
                    <input className="btn" type="submit" value="Login" />
                </form>
            </div>
            )
    }
}