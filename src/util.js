import axios from 'axios';
import React from 'react';

const URL = "http://localhost:3100/";

const headers = () => {
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    if (getToken()) {
        headers["headers"]["Authorization"] = getToken();
    }
    return headers;
}

export const login = async (username, password) => {
    return await axios.post(URL + "login", {
        "player": {
            username,
            password
        }
    });
}

export const getPlayers = async () => {
    return await axios.get(URL + "players", headers());
}

export const postGame = async (info) => {
    let token = getToken();

    return await axios.post(URL + "games", {
        "game": {
            ...info
        }
    }, headers());
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const saveToken = (token) => {
    localStorage.setItem("token", token);
}

export const isLoggedIn = () => {
    return localStorage.getItem("token");
}

export const logout = () => {
    localStorage.removeItem("token");
}