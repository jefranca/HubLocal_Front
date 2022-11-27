import axios from 'axios'
import { getFromLocalStorage } from '../utils/localStorage';

const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL ? REACT_APP_BASE_URL : 'http://localhost:4001/'

function config(login) {
    return {
        headers: { Authorization: `Bearer ${login}` },
    };
}

function postSignUp(body) {
    return axios.post(`${BASE_URL}auth/sign-up`, body)
}
function postSignIn(body) {
    return axios.post(`${BASE_URL}auth/sign-in`, body)
}
function postCompany(body,login) {
    return axios.post(`${BASE_URL}company`, body, config(login))
}
function getMyCompanies(login) {
    return axios.get(`${BASE_URL}company`, config(login))
}
function getOneCompany(body,login) {
    return axios.post(`${BASE_URL}company/local-responsible`, body, config(login))
}
function deleteToken(login) {
    return axios.delete(`${BASE_URL}auth/logout`, config(login))
}

export {
    deleteToken,
    postSignUp,
    postSignIn,
    postCompany,
    getMyCompanies,
    getOneCompany
}