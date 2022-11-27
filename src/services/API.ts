import axios from 'axios'
import { getFromLocalStorage } from '../utils/localStorage';

const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL ? REACT_APP_BASE_URL : 'http://localhost:4001/'

const token=getFromLocalStorage()

function config() {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
}

function postSignUp(body) {
    return axios.post(`${BASE_URL}auth/sign-up`, body)
}
function postSignIn(body) {
    return axios.post(`${BASE_URL}auth/sign-in`, body)
}
function postCompany(body) {
    return axios.post(`${BASE_URL}company`, body, config())
}
function getMyCompanies() {
    return axios.get(`${BASE_URL}company`, config())
}
function getOneCompany(body) {
    return axios.post(`${BASE_URL}company/local-responsible`, body, config())
}

export {
    postSignUp,
    postSignIn,
    postCompany,
    getMyCompanies,
    getOneCompany
}