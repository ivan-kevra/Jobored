import axios, {AxiosResponse} from "axios";
import {CatalogResponseType, VacanciesDataResponseType, VacancyRequestType, VacancyResponseType} from "./apiTypes";

const instance = axios.create({
    baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/',
    withCredentials: true,
    headers: {
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        // 'x-api-app-id': ''
    },
})

export const api = {
    auth() {
        return instance.get('password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0')
    },
    getVacancies(data: VacancyRequestType) {
        const {published, keyword, payment_from, payment_to, catalogues, page, count} = data;
        return instance.get<AxiosResponse, AxiosResponse<VacanciesDataResponseType>>(`vacancies/?published=${published}&keyword=${keyword}&payment_from=${payment_from}&payment_to=${payment_to}&catalogues=${catalogues}&page=${page}&count=${count}/`)
    },
    getCatalogues() {
        return instance.get<AxiosResponse, AxiosResponse<CatalogResponseType[]>>('catalogues/');
    },
    getVacancyById(id: string) {
        return instance.get<AxiosResponse, AxiosResponse<VacancyResponseType>>(`vacancies/${id}`);
    }
}