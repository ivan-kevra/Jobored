import {Dispatch} from "redux";
import {api} from "../../api/api";


const initialState: VacanciesDataResponseType = {objects: []}

export const vacanciesReducer = (state: VacanciesDataResponseType = initialState, action: VacanciesActionsType): VacanciesDataResponseType => {
    switch (action.type) {
        case 'GET-VACANCIES': {
            return {...state, objects: [...action.vacancies]}
        }
        default:
            return state
    }
}
//actions
const getVacanciesAC = (vacancies: VacancyResponseType[]) => ({type: 'GET-VACANCIES', vacancies} as const);

//thunks
export const setVacanciesTC = () => (dispatch: Dispatch<VacanciesActionsType>) => {
    api.getVacancies()
        .then(response => {
            dispatch(getVacanciesAC(response.data.objects))
        })
        .catch(() => {
            console.log('error')
        })
}

//types
export type VacanciesDataResponseType = {
    objects: VacancyResponseType[]
}
export type VacancyResponseType = {
    id: number
    profession: string
    firm_name: string
    town: {
        title: string
    },
    type_of_work: {
        'title': string
    }
    payment_to: number
    payment_from: number
    currency: string
}
export type VacanciesActionsType = ReturnType<typeof getVacanciesAC>