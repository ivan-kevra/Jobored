import {Dispatch} from "redux";
import {api} from "../../api/api";
import {FilterParamsType} from "./filterReducer";


const initialState: VacanciesDataResponseType = {
    objects: [],
    filterParams: {
        catalogue: null,
        payment_from: 0,
        payment_to: 0,
        count: 4,
        keyword: '',
        page: 1
    },
}

export const vacanciesReducer = (state: VacanciesDataResponseType = initialState, action: VacanciesActionsType): VacanciesDataResponseType => {
    switch (action.type) {
        case 'GET-VACANCIES': {
            return {...state, objects: [...action.vacancies]}
        }
        case "SET-FILTER-PARAMS" :
            return {
                ...state,
                filterParams: {
                    ...state.filterParams,
                    catalogue: action.params.catalogue,
                    payment_from: action.params.payment_from,
                    payment_to: action.params.payment_to,
                    keyword: action.params.keyword,
                    page: action.params.page
                }
            }
        default:
            return state
    }
}
//actions
export const getVacanciesAC = (vacancies: VacancyResponseType[]) => ({type: 'GET-VACANCIES', vacancies} as const);
export const setFilterParamsAC = (params: FilterParamsType) => ({type: 'SET-FILTER-PARAMS', params} as const);
//thunks

export const setVacanciesTC = (params: FilterParamsType) => (dispatch: Dispatch<VacanciesActionsType>) => {
    api.getVacancies(params)
        .then(response => {
            dispatch(getVacanciesAC(response.data.objects))
        })
        .catch(() => {
            console.log('error')
        })
}

//types
export type VacanciesDataResponseType = {
    objects: VacancyResponseType[],
    filterParams: FilterParamsType,
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
    vacancyRichText: string
}
export type VacanciesActionsType = ReturnType<typeof getVacanciesAC>
    | ReturnType<typeof setFilterParamsAC>



