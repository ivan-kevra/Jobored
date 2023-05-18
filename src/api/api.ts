import axios from "axios";
import {VacanciesDataResponseType} from "../store/reducers/vacanciesReducer";


const API_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0/';
const ACCESS_TOKEN = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
const AUTH_LOGIN = 'sergei.stralenia@gmail.com'
const AUTH_PWD = 'paralect123'
const CLIENT_ID = '2356'
const CLIENT_HR = 0;


const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'x-secret-key': SECRET_KEY,
        'x-api-app-id': ACCESS_TOKEN
    }
});

export const api = {
    auth() {
        return instance.get(`oauth2/password/?login=${AUTH_LOGIN}&password=${AUTH_PWD}&client_id=${CLIENT_ID}&client_secret=${ACCESS_TOKEN}&hr=${CLIENT_HR}`)
    },
    getVacancies() {
        return instance.get<VacanciesDataResponseType>(`vacancies`)
    },
    getCatalogues() {
        return instance.get('catalogues/');
    },
}


