import axios from 'axios';
import React from 'react';

const URL = "http://localhost:3100/";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export const login = async (username, password) => {
    return await axios.post(URL + "login", {
        "player": {
            username,
            password
        }
    });
}

export const getPlayers = async () => {
    return await axios.get(URL + "players", headers);
}

export const postGame = async () => {
    let token = getToken();

    axios.post(URL + "/newGame", {
        
    })
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const saveToken = (token) => {
    localStorage.setItem("token", token);
}

export const isLoggedIn = () => {
    return localStorage.getItem("token")
} 