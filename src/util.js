import axios from 'axios';
import React from 'react';

URL = "http://localhost:3100/"

export const login = async (username, password) => {
    return await axios.post(URL + "login", {
        "player": {
            username,
            password
        }
    });
}

export const saveToken = (token) => {
    localStorage.setItem("token", token);
}

export const isLoggedIn = () => {
    return localStorage.getItem("token")
} 