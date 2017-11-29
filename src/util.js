import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';

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

export const getGames = async () => {
    return await axios.get(URL + "games", headers());
}

export const formatWinner = (result, white, black) => {
    if (result === 1) return white;
    if (result === -1) return black;
    return "draw";
}

export const formatDate = (date) => {
    return moment(date).format("DD.MM.YYYY HH:mm");
}

export const postGame = async (info) => {
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

export const saveUserName = (username) => {
    localStorage.setItem("currentUserName", username);
}

export const isLoggedIn = () => {
    return localStorage.getItem("token");
}

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUserName");
}

export const getNotifications = async () => {
    return await axios.get(URL + "notifications", headers());
}

export const getMyGames = async () => {
    return await axios.get(URL + "my_games", headers());
}

export const approveGame = async (id) => {
    return await axios.post(URL + `games/${id}/confirm`, {}, headers());
}

export const currentUserName = () => {
    return localStorage.getItem("currentUserName");
}

export const toastOnError = (message) => {
    toast(message,  {className: 'toast toast-error'});
}

export const toastOnSuccess = (message) => {
    toast(message,  {className: 'toast toast-success'});
}
